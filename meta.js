(function () {
  "use strict";

  const CH = typeof CHAMPIONS !== "undefined" ? CHAMPIONS : [];
  const iconByKey = new Map();
  CH.forEach((c) => {
    iconByKey.set(String(c.name).toLowerCase(), c.id);
    iconByKey.set(String(c.id).toLowerCase(), c.id);
  });

  const MIN_GAMES_FOR_TIER = 15;

  const LANES = [
    { key: "ALL", label: "All" },
    { key: "TOP", label: "Top" },
    { key: "JUNGLE", label: "Jungle" },
    { key: "MIDDLE", label: "Mid" },
    { key: "BOTTOM", label: "Bot" },
    { key: "UTILITY", label: "Support" },
  ];

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

  function laneStats(champ, laneKey) {
    if (laneKey === "ALL") {
      return { games: champ.games, winRate: champ.winRate };
    }
    const lane = (champ.byLane || {})[laneKey];
    return lane ? { games: lane.games, winRate: lane.winRate } : null;
  }

  function row(champ, index) {
    const st = laneStats(champ, metaState.lane);
    if (!st) return "";
    const t = tierFor(st.games, st.winRate);
    const img = champIcon(champ.championName);
    return `
      <tr>
        <td class="meta-rank">#${index + 1}</td>
        <td>${img ? `<img class="meta-champ-img" src="${img}" alt="${esc(champ.championName)}" onerror="this.style.visibility='hidden'">` : ""}</td>
        <td class="meta-champ-name">${esc(champ.championName)}</td>
        <td><span class="tier-badge ${tierClass(t)}">${t ? t : "-"}</span></td>
        <td class="meta-games">${st.games}</td>
        <td class="meta-wr">
          <div class="wr-track"><span class="wr-fill" style="width:${Math.min(st.winRate, 100)}%"></span></div>
          <span>${st.winRate}%</span>
        </td>
      </tr>`;
  }

  function timeAgo(iso) {
    if (!iso) return "pending";
    const ms = Date.now() - new Date(iso).getTime();
    const h = Math.floor(ms / 3600000);
    if (h < 1) return "just now";
    if (h < 24) return `${h}h ago`;
    return `${Math.floor(h / 24)}d ago`;
  }

  function renderInfo(data) {
    const regions = (data.regions || []).length ? data.regions.join(" / ") : "-";
    el("metaInfo").innerHTML = `Worldwide high-ELO snapshot
      <span class="meta-info-dot">·</span> ${data.players || 0} players
      <span class="meta-info-dot">·</span> ${data.championGames || 0} champion games
      <span class="meta-info-dot">·</span> ${esc(regions)}
      <span class="meta-info-dot">·</span> updated ${timeAgo(data.generatedAt)}`;
  }

  function render(data) {
    const results = el("metaResults");
    renderInfo(data);
    let list = (data.champions || []).filter((c) => laneStats(c, metaState.lane));
    if (!list.length) {
      results.innerHTML =
        '<p class="no-results">No data for this lane yet. Check back after the next worldwide refresh.</p>';
      results.classList.remove("hidden");
      return;
    }
    const sort = metaState.sort;
    const sorted = [...list].sort((a, b) => {
      const sa = laneStats(a, metaState.lane);
      const sb = laneStats(b, metaState.lane);
      if (sort === "winrate") {
        return sb.winRate - sa.winRate || sb.games - sa.games;
      }
      return sb.games - sa.games || sb.winRate - sa.winRate;
    });
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
      <p class="meta-footnote">Tier = win rate with at least ${MIN_GAMES_FOR_TIER} games in the selected lane. A bigger worldwide sample makes ratings more reliable.</p>`;
    results.classList.remove("hidden");
  }

  const metaState = { sort: "games", lane: "ALL", data: null };

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

  document.querySelectorAll(".lane-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".lane-tab").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      metaState.lane = btn.dataset.lane;
      if (metaState.data) render(metaState.data);
    });
  });

  load();
})();
