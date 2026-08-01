(function () {
  "use strict";

  const fb = typeof firebase !== "undefined" && FIREBASE_CONFIGURED ? firebase : null;
  if (fb) fb.initializeApp(FIREBASE_CONFIG);

  const $ = (id) => document.getElementById(id);

  const modal = $("authModal");
  const modalTitle = $("authTitle");
  const authNote = $("authNote");
  const tabs = document.querySelectorAll(".auth-tab");
  const emailForm = $("emailForm");
  const emailInput = $("authEmail");
  const passwordInput = $("authPassword");
  const emailSubmit = $("emailSubmit");
  const googleBtn = $("googleBtn");
  const riotBtn = $("riotBtn");
  const authError = $("authError");
  const signInBtn = $("signInBtn");
  const userMenu = $("userMenu");
  const userAvatar = $("userAvatar");
  const userName = $("userName");
  const signOutBtn = $("signOutBtn");
  const riotLink = $("riotLink");

  let mode = "login";
  let currentUser = null;
  let riotAccount = null;
  let backendOnline = false;
  let riotConfigured = false;

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
    t._timer = setTimeout(() => t.classList.remove("show"), 3500);
  }

  function reloadSoon() {
    setTimeout(() => window.location.reload(), 700);
  }

  function setBusy(btn, busy) {
    if (!btn) return;
    btn.disabled = busy;
    if (busy) {
      btn.dataset.label = btn.textContent;
      btn.textContent = "Working...";
    } else if (btn.dataset.label) {
      btn.textContent = btn.dataset.label;
      delete btn.dataset.label;
    }
  }

  function showError(msg) {
    authError.textContent = msg || "";
  }

  // ----- auth UI -----

  function setTabUI() {
    tabs.forEach((t) => t.classList.toggle("active", t.dataset.mode === mode));
    modalTitle.textContent = mode === "signup" ? "Create account" : "Sign in";
    emailSubmit.textContent = mode === "signup" ? "Create Account" : "Sign In";
  }

  function openModal(m) {
    mode = m || "login";
    modal.classList.remove("hidden");
    authError.textContent = "";
    authNote.textContent = "";
    if (!fb) {
      authNote.textContent =
        "Add your Firebase config to firebase-config.js to enable sign-in.";
    } else if (!backendOnline) {
      authNote.textContent =
        "Server offline: Riot sign-in and account linking are unavailable.";
    } else if (!riotConfigured) {
      authNote.textContent = "Riot sign-in needs RIOT_CLIENT_ID / RIOT_CLIENT_SECRET in server/.env.";
    }
    setTabUI();
  }

  function closeModal() {
    modal.classList.add("hidden");
  }

  function renderRiotControls() {
    if (!currentUser) return;
    const isRiotUser = currentUser.providerData.some((p) => p.providerId === "custom");

    if (isRiotUser) {
      riotLink.innerHTML = '<span class="connected">Signed in with a League of Legends account</span>';
      return;
    }

    if (riotAccount && riotAccount.gameName) {
      riotLink.innerHTML =
        `<span class="connected">Connected: <b>${esc(riotAccount.gameName)}#${esc(riotAccount.tagLine)}</b></span>` +
        '<button class="btn btn-connect" id="unlinkBtn">Unlink account</button>';
      $("unlinkBtn").addEventListener("click", unlinkRiot);
      return;
    }

    riotLink.innerHTML =
      '<button class="btn btn-connect" id="connectBtn">Connect League of Legends account</button>' +
      (backendOnline
        ? "<small>Link your Riot account to this profile.</small>"
        : "<small>Start the server to use Riot sign-in.</small>");
    const connectBtn = $("connectBtn");
    connectBtn.disabled = !backendOnline;
    connectBtn.addEventListener("click", connectRiot);
  }

  function renderAuth() {
    if (!currentUser) {
      signInBtn.classList.remove("hidden");
      userMenu.classList.add("hidden");
      return;
    }
    signInBtn.classList.add("hidden");
    userMenu.classList.remove("hidden");

    const name = currentUser.displayName || currentUser.email || "Player";
    userName.textContent = name;
    userName.title = currentUser.email || name;

    if (currentUser.photoURL) {
      userAvatar.innerHTML = `<img src="${esc(currentUser.photoURL)}" alt="">`;
    } else {
      userAvatar.textContent = (name[0] || "?").toUpperCase();
    }

    renderRiotControls();
  }

  // ----- riot linking -----

  async function fetchRiotStatus(user) {
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/riot/status", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data.linked ? data.account : null;
    } catch {
      return null;
    }
  }

  async function applyRiotDisplayName(user, account) {
    if (!account || !account.gameName || user.displayName) return;
    try {
      await user.updateProfile({ displayName: `${account.gameName}#${account.tagLine}` });
    } catch {
      /* ignore */
    }
  }

  async function connectRiot() {
    if (!currentUser) return;
    try {
      const token = await currentUser.getIdToken();
      const res = await fetch("/api/riot/auth?mode=link", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Could not start account linking.");
      window.location.href = data.url;
    } catch (err) {
      toast(err.message, true);
    }
  }

  async function unlinkRiot() {
    if (!currentUser) return;
    try {
      const token = await currentUser.getIdToken();
      const res = await fetch("/api/riot/unlink", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Could not unlink your LoL account.");
      riotAccount = null;
      toast("League of Legends account unlinked");
      renderRiotControls();
    } catch (err) {
      toast(err.message, true);
    }
  }

  // ----- events -----

  signInBtn.addEventListener("click", () => {
    if (!fb) {
      toast("Add your Firebase config to firebase-config.js to enable sign-in.", true);
      return;
    }
    openModal("login");
  });

  $("authClose").addEventListener("click", closeModal);
  document.querySelector(".modal-backdrop").addEventListener("click", closeModal);

  tabs.forEach((t) => t.addEventListener("click", () => openModal(t.dataset.mode)));

  googleBtn.addEventListener("click", async () => {
    if (!fb) return;
    setBusy(googleBtn, true);
    try {
      const provider = new fb.auth.GoogleAuthProvider();
      await fb.auth().signInWithPopup(provider);
      closeModal();
      toast("Signed in with Google");
      reloadSoon();
    } catch (err) {
      if (err.code !== "auth/popup-closed-by-user") showError(err.message);
    } finally {
      setBusy(googleBtn, false);
    }
  });

  emailForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!fb) return;
    const email = emailInput.value.trim();
    const pass = passwordInput.value;
    if (!email || !pass) return;
    setBusy(emailSubmit, true);
    try {
      if (mode === "signup") {
        await fb.auth().createUserWithEmailAndPassword(email, pass);
        toast("Account created");
      } else {
        await fb.auth().signInWithEmailAndPassword(email, pass);
        toast("Welcome back");
      }
      closeModal();
      reloadSoon();
    } catch (err) {
      showError(err.message);
    } finally {
      setBusy(emailSubmit, false);
    }
  });

  riotBtn.addEventListener("click", async () => {
    if (!fb) return;
    setBusy(riotBtn, true);
    try {
      const res = await fetch("/api/riot/auth?mode=signin");
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Riot sign-in is not configured.");
      window.location.href = data.url;
    } catch (err) {
      showError(err.message);
      setBusy(riotBtn, false);
    }
  });

  signOutBtn.addEventListener("click", async () => {
    try {
      await fb.auth().signOut();
    } catch {
      /* ignore */
    }
    toast("Signed out");
    reloadSoon();
  });

  if (fb) {
    fb.auth().onAuthStateChanged(async (user) => {
      currentUser = user;
      if (!user) {
        riotAccount = null;
        renderAuth();
        return;
      }
      const account = await fetchRiotStatus(user);
      riotAccount = account;
      await applyRiotDisplayName(user, account);
      renderAuth();
    });
  }

  async function handleUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const riotToken = params.get("riotToken");
    const url = window.location.pathname;

    if (riotToken) {
      history.replaceState(null, "", url);
      if (fb) {
        try {
          await fb.auth().signInWithCustomToken(riotToken);
          toast("Signed in with League of Legends");
          reloadSoon();
        } catch (err) {
          toast("LoL sign-in failed: " + err.message, true);
        }
      }
    } else if (params.has("riot")) {
      history.replaceState(null, "", url);
      toast("League of Legends account connected");
    }
  }

  async function probeBackend() {
    try {
      const res = await fetch("/api/config");
      if (!res.ok) throw new Error("bad status");
      const cfg = await res.json();
      backendOnline = true;
      riotConfigured = cfg.riotConfigured;
    } catch {
      backendOnline = false;
      riotConfigured = false;
    }
    renderRiotControls();
  }

  handleUrlParams();
  probeBackend();
  renderAuth();
})();
