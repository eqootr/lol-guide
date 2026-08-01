(function () {
  "use strict";

  const CH = typeof CHAMPIONS !== "undefined" ? CHAMPIONS : [];
  const iconByKey = new Map();
  CH.forEach((c) => {
    iconByKey.set(String(c.name).toLowerCase(), c.id);
    iconByKey.set(String(c.id).toLowerCase(), c.id);
  });

  const MIN_GAMES_FOR_TIER = 15;

  const el = (id) => document.getElementById(id);

  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[c]);
  }

  function champIcon(name) {
    const localId = iconByKey.get(String(name).toLowerCase());
    return localId ? `icons/${encodeURIComponent(localId)}.png` : "";
  }

  function tierFor(games, winRate) {
    if (games < MIN_GAMES_FOR_TIER) return null;
    if (winRate >= 58) return "S+";
    if (winRate >= 54) return "S";
    if (winRate >= 51) return "A";
    if (winRate >= 48) return "B";
    return "C";
  }

  function tierClass(tier) {
    const map = { "S+": "splus", S: "s", A: "a", B: "b", C: "c" };
    return map[tier] || "";
  }

  function row(champ, index) {
    const t = tierFor(champ.games, champ.winRate);
    const img = champIcon(champ.championName);
    return `
      <tr>
        <td class="meta-rank">#${index + 1}</td>
        <td>${img ? `<img class="meta-champ-img" src="${img}" alt="${esc(champ.championName)}" onerror="this.style.visibility='hidden'">` : ""}</td>
        <td class="meta-champ-name">${esc(champ.championName)}</td>
        <td><span class="tier-badge ${tierClass(t)}">${t ? t : "-"}</span></td>
        <td class="meta-games">${champ.games}</td>
        <td class="meta-wr">
          <div class="wr-track"><span class="wr-fill" style="width:${Math.min(champ.winRate, 100)}%"></span></div>
          <span>${champ.winRate}%</span>
        </td>
      </tr>`;
  }

  function render(data) {
    const results = el("metaResults");
    let list = data.champions || [];
    if (!list.length) {
      results.innerHTML = '<p class="no-results">No data yet. Search a few players and come back!</p>';
      results.classList.remove("hidden");
      return;
    }
    const sort = metaState.sort;
    const sorted = [...list].sort((a, b) =>
      sort === "winrate"
        ? b.winRate - a.winRate || b.games - a.games
        : b.games - a.games || b.winRate - a.winRate
    );
    results.innerHTML = `
      <table class="meta-table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Champion</th>
            <th>Tier</th>
            <th>Games</th>
            <th>Win rate</th>
          </tr>
        </thead>
        <tbody>
          ${sorted.map(row).join("")}
        </tbody>
      </table>
      <p class="meta-footnote">Tier = win rate with at least ${MIN_GAMES_FOR_TIER} recorded games. Win rate is rough until a champion reaches that many games.</p>`;
    results.classList.remove("hidden");
  }

  const metaState = { sort: "games", data: null };

  function setError(msg) {
    el("metaErrorText").textContent = msg;
    el("metaLoading").classList.add("hidden");
    el("metaResults").classList.add("hidden");
    el("metaError").classList.remove("hidden");
  }

  async function load() {
    el("metaLoading").classList.remove("hidden");
    el("metaError").classList.add("hidden");
    el("metaResults").classList.add("hidden");
    try {
      const res = await fetch("/api/meta");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not load the meta tier list.");
      metaState.data = data;
      render(data);
    } catch (err) {
      setError(err.message || "Could not load the meta tier list.");
    } finally {
      el("metaLoading").classList.add("hidden");
    }
  }

  document.querySelectorAll(".btn-sort").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".btn-sort").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      metaState.sort = btn.dataset.sort;
      if (metaState.data) render(metaState.data);
    });
  });

  load();
})();
