(function () {
  "use strict";

  const fb = typeof firebase !== "undefined" && FIREBASE_CONFIGURED ? firebase : null;
  const prompt = document.getElementById("authPrompt");
  const wrap = document.getElementById("profileWrap");
  const avatar = document.getElementById("profileAvatar");
  const displayName = document.getElementById("profileDisplayName");
  const emailEl = document.getElementById("profileEmail");
  const riotIdInput = document.getElementById("riotIdInput");
  const saveRiotIdBtn = document.getElementById("saveRiotId");
  const riotIdHint = document.getElementById("riotIdHint");
  const bgPicker = document.getElementById("bgPicker");
  const champSearch = document.getElementById("champBgSearch");
  const champGrid = document.getElementById("champBgGrid");
  const statsLoading = document.getElementById("myStatsLoading");
  const statsEl = document.getElementById("myStats");

  const THEMES = [
    { id: "void", label: "Void", color: "#0bc6e3" },
    { id: "crimson", label: "Crimson", color: "#e04a3a" },
    { id: "emerald", label: "Emerald", color: "#3ddc84" },
    { id: "aurora", label: "Aurora", color: "#c89bdc" },
    { id: "gold", label: "Gold", color: "#c8aa6e" },
  ];

  let currentUser = null;
  let currentProfile = { name: "", tag: "", background: "void", champion: "" };
  let champSearchTerm = "";

  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[c]);
  }

  function toast(msg, isError) {
    let t = document.querySelector(".toast");
    if (!t) {
      t = document.createElement("div");
      t.className = "toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.toggle("error", !!isError);
    t.classList.add("show");
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove("show"), 3000);
  }

  function setBusy(btn, busy) {
    if (!btn) return;
    btn.disabled = busy;
    btn.textContent = busy ? "Saving..." : "Save";
  }

  function parseName(value) {
    const hash = value.trim().lastIndexOf("#");
    if (hash === -1 || hash === value.length - 1) return null;
    const name = value.slice(0, hash).trim();
    const tag = value.slice(hash + 1).trim();
    if (!name || !tag) return null;
    return { name, tag };
  }

  function renderUserHeader(user) {
    const name = user.displayName || user.email || "Player";
    displayName.textContent = name;
    emailEl.textContent = user.email || "";
    if (user.photoURL) {
      avatar.innerHTML = `<img src="${esc(user.photoURL)}" alt="">`;
    } else {
      avatar.innerHTML = `<span class="fallback-letter">${esc((name[0] || "?").toUpperCase())}</span>`;
    }
  }

  function renderBgPicker(active) {
    bgPicker.innerHTML = THEMES.map(
      (t) => `
      <button class="bg-swatch ${t.id === active ? "active" : ""}" data-bg="${t.id}" title="${t.label}" style="--swatch:${t.color}">
        <span>${t.label}</span>
      </button>`
    ).join("");
    bgPicker.querySelectorAll(".bg-swatch").forEach((btn) => {
      btn.addEventListener("click", () => saveBackground(btn.dataset.bg, btn));
    });
  }

  function showPrompt() {
    prompt.classList.remove("hidden");
    wrap.classList.add("hidden");
  }

  function showProfile() {
    prompt.classList.add("hidden");
    wrap.classList.remove("hidden");
  }

  async function fetchProfile() {
    const token = await currentUser.getIdToken();
    const res = await fetch("/api/profile", { headers: { Authorization: `Bearer ${token}` } });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || "Could not load profile.");
    return data;
  }

  function fillRiotInput(profile, linked) {
    const name = profile.name || linked?.gameName || "";
    const tag = profile.tag || linked?.tagLine || "";
    if (name && tag) riotIdInput.value = `${name}#${tag}`;
    else riotIdInput.value = "";
  }

  async function loadMyStats() {
    const { name, tag } = currentProfile;
    if (!name || !tag) {
      riotIdHint.textContent = "Save your Riot ID to see your own stats here.";
      statsEl.classList.add("hidden");
      statsLoading.classList.add("hidden");
      return;
    }
    statsLoading.classList.remove("hidden");
    statsEl.classList.add("hidden");
    try {
      const res = await fetch(`/api/player?name=${encodeURIComponent(name)}&tag=${encodeURIComponent(tag)}`);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw { message: data.error || "Could not load player stats.", kind: data.kind };
      LONStats.render(statsEl, data);
      statsEl.classList.remove("hidden");
      statsLoading.classList.add("hidden");
      statsEl.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      statsLoading.classList.add("hidden");
      statsEl.classList.add("hidden");
      riotIdHint.textContent = err.message || "Could not load player stats.";
    }
  }

  async function saveRiotId() {
    const parsed = parseName(riotIdInput.value);
    if (!parsed) {
      toast("Enter a name and tag, e.g. Yike#EUW", true);
      return;
    }
    setBusy(saveRiotIdBtn, true);
    try {
      const token = await currentUser.getIdToken();
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ name: parsed.name, tag: parsed.tag }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Could not save your Riot ID.");
      currentProfile.name = parsed.name;
      currentProfile.tag = parsed.tag;
      toast("Riot ID saved");
      loadMyStats();
    } catch (err) {
      toast(err.message, true);
    } finally {
      setBusy(saveRiotIdBtn, false);
    }
  }

  async function saveBackground(bg, btn) {
    if (!currentUser) return;
    try {
      const token = await currentUser.getIdToken();
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ name: currentProfile.name, tag: currentProfile.tag, background: bg, champion: "" }),
      });
      if (!res.ok) throw new Error("Could not save background.");
      currentProfile.background = bg;
      currentProfile.champion = "";
      bgPicker.querySelectorAll(".bg-swatch").forEach((b) => b.classList.toggle("active", b === btn));
      renderChampGrid();
      LONBg.apply(currentProfile);
      toast("Background saved");
    } catch (err) {
      toast(err.message, true);
    }
  }

  async function saveChampion(championId, btn) {
    if (!currentUser) return;
    try {
      const token = await currentUser.getIdToken();
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ name: currentProfile.name, tag: currentProfile.tag, background: "champion", champion: championId }),
      });
      if (!res.ok) throw new Error("Could not save background.");
      currentProfile.background = "champion";
      currentProfile.champion = championId;
      bgPicker.querySelectorAll(".bg-swatch").forEach((b) => b.classList.remove("active"));
      renderChampGrid();
      LONBg.apply(currentProfile);
      toast("Champion background saved");
    } catch (err) {
      toast(err.message, true);
    }
  }

  function renderChampGrid() {
    const term = champSearchTerm.toLowerCase();
    const list = CHAMPIONS.filter((c) => !term || c.name.toLowerCase().includes(term)).slice(0, 120);
    champGrid.innerHTML = list
      .map(
        (c) => `
      <button class="champ-bg-item ${currentProfile.champion === c.id && currentProfile.background === "champion" ? "active" : ""}" data-id="${esc(c.id)}">
        <img src="icons/${encodeURIComponent(c.id)}.png" alt="${esc(c.name)}" loading="lazy">
        <span class="cb-name">${esc(c.name)}</span>
      </button>`
      )
      .join("");
    champGrid.querySelectorAll(".champ-bg-item").forEach((btn) => {
      btn.addEventListener("click", () => saveChampion(btn.dataset.id, btn));
    });
  }

  saveRiotIdBtn.addEventListener("click", saveRiotId);
  riotIdInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") saveRiotId();
  });
  champSearch.addEventListener("input", () => {
    champSearchTerm = champSearch.value.trim();
    renderChampGrid();
  });

  document.getElementById("profileSignIn").addEventListener("click", () => {
    document.getElementById("signInBtn").click();
  });

  if (!fb) {
    prompt.querySelector("p").textContent =
      "Profiles need Firebase to be configured. Add your config to firebase-config.js first.";
    prompt.classList.remove("hidden");
  } else {
    fb.auth().onAuthStateChanged(async (user) => {
      currentUser = user;
      if (!user) {
        showPrompt();
        return;
      }
      showProfile();
      renderUserHeader(user);
      try {
        const data = await fetchProfile();
        currentProfile = data.profile;
        fillRiotInput(data.profile, data.linked);
        renderBgPicker(data.profile.background);
        renderChampGrid();
        LONBg.apply(data.profile);
        loadMyStats();
      } catch (err) {
        toast(err.message, true);
      }
    });
  }
})();
