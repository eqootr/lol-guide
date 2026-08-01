(function () {
  "use strict";

  const CH = typeof CHAMPIONS !== "undefined" ? CHAMPIONS : [];

  const iconByKey = new Map();
  CH.forEach((c) => {
    iconByKey.set(String(c.name).toLowerCase(), c.id);
    iconByKey.set(String(c.id).toLowerCase(), c.id);
  });

  const QUEUES = {
    400: "Draft Pick",
    420: "Ranked Solo",
    430: "Blind Pick",
    440: "Ranked Flex",
    450: "ARAM",
    490: "Quickplay",
    700: "Clash",
    830: "Co-op AI",
    900: "ARURF",
    1020: "Arena",
  };

  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[c]);
  }

  function queueName(id) {
    return QUEUES[id] || "Match";
  }

  function laneName(lane) {
    const map = {
      TOP: "Top",
      JUNGLE: "Jungle",
      MIDDLE: "Mid",
      BOTTOM: "Bot",
      UTILITY: "Support",
      NONE: "-",
    };
    return map[lane] || lane || "-";
  }

  function champIcon(name, version) {
    const localId = iconByKey.get(String(name).toLowerCase());
    return localId
      ? `icons/${encodeURIComponent(localId)}.png`
      : `https://ddragon.leagueoflegends.com/cdn/${encodeURIComponent(version)}/img/champion/${encodeURIComponent(name)}.png`;
  }

  function fmtDuration(sec) {
    if (!sec) return "";
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  }

  function fmtNum(n) {
    if (n == null) return "0";
    return Number(n).toLocaleString("en-US");
  }

  function tierClass(tier) {
    return String(tier || "").toLowerCase();
  }

  function rankCard(label, r) {
    if (!r) {
      return `<div class="rank-card"><span class="rank-label">${label}</span><span class="rank-none">Unranked</span></div>`;
    }
    const tier = r.tier.charAt(0) + r.tier.slice(1).toLowerCase();
    const hot = r.hotStreak
      ? `<span class="hot-dot" title="Hot streak"></span>`
      : "";
    return `<div class="rank-card tier-${tierClass(r.tier)}">
      <span class="rank-label">${label} ${hot}</span>
      <b class="rank-tier">${esc(tier)} ${esc(r.rank)}</b>
      <span class="rank-lp">${r.lp} LP</span>
      <span class="rank-wr">${r.winRate}% WR · ${r.wins}W / ${r.losses}L</span>
    </div>`;
  }

  function render(container, data) {
    const acct = data.account;
    const sum = data.summary;
    const v = data.ddragonVersion;

    const iconHtml = acct.profileIconId
      ? `<img src="https://ddragon.leagueoflegends.com/cdn/${encodeURIComponent(v)}/img/profileicon/${acct.profileIconId}.png" alt="${esc(acct.gameName)}" onerror="this.outerHTML='&lt;span class=&quot;fallback-letter&quot;&gt;${esc((acct.gameName || "?").charAt(0))}&lt;/span&gt;'">`
      : `<span class="fallback-letter">${esc((acct.gameName || "?").charAt(0))}</span>`;

    const live = data.live && data.live.inGame;
    const spectateUrl = `https://${encodeURIComponent(acct.platform)}.spectator.pvp.net/observer-mode/spectate/${encodeURIComponent(acct.summonerId)}`;
    const liveHtml = live
      ? `<div class="live-chip on" title="${esc(
          (data.live.participants || []).map((p) => p.summonerName).join(", ")
        )}"><span class="live-dot"></span>In a game now · ${esc(queueName(data.live.queueId))}<a class="btn-spectate" href="${spectateUrl}" target="_blank" rel="noopener">Spectate</a></div>`
      : `<div class="live-chip off"><span class="live-dot"></span>Not in a live game</div>`;

    const rankedHtml =
      data.ranked && (data.ranked.solo || data.ranked.flex)
        ? `<h3 class="section-title">Ranked <span class="meta">current season</span></h3>
           <div class="rank-cards">${rankCard("Solo / Duo", data.ranked.solo)}${rankCard("Flex", data.ranked.flex)}</div>`
        : "";

    const mastery = (data.mastery || []).map((m) => `
      <div class="mastery-item">
        <div class="mastery-avatar">
          <img src="${champIcon(m.championName, v)}" alt="${esc(m.championName)}" onerror="this.style.visibility='hidden'">
          <span class="mastery-level">${m.championLevel}</span>
        </div>
        <b class="mastery-name">${esc(m.championName)}</b>
        <span class="mastery-pts">${fmtNum(m.championPoints)} pts</span>
      </div>`).join("");

    const topChamps = (data.topChampions || [])
      .map(
        (c) => `
      <div class="top-champ">
        <img src="${champIcon(c.championName, v)}" alt="${esc(c.championName)}" onerror="this.style.visibility='hidden'">
        <b class="champ-name">${esc(c.championName)}</b>
        <span class="champ-games">${c.games} game${c.games === 1 ? "" : "s"}</span>
        <div class="champ-bar"><span style="width:${Math.min(c.winRate, 100)}%"></span></div>
        <span class="champ-wr">${c.winRate}% WR</span>
        <span class="champ-kda">${c.kda} KDA</span>
      </div>`
      )
      .join("");

    const recent = (data.recent || [])
      .map((m) => {
        const kda = `${m.kills} / ${m.deaths} / ${m.assists}`;
        return `
      <div class="match-row ${m.win ? "win" : "loss"}">
        <span class="match-result">${m.win ? "V" : "X"}</span>
        <img class="match-champ" src="${champIcon(m.championName, v)}" alt="${esc(m.championName)}" onerror="this.style.visibility='hidden'">
        <span class="match-champ-name">${esc(m.championName)}</span>
        <span class="match-kda">${kda}</span>
        <span class="match-role">${laneName(m.lane)}</span>
        <span class="match-mode">${queueName(m.queueId)}</span>
        <span class="match-time">${fmtDuration(m.duration)}</span>
      </div>`;
      })
      .join("");

    container.innerHTML = `
      <div class="player-hero">
        <div class="player-icon">${iconHtml}</div>
        <div class="player-hero-meta">
          <h2>${esc(acct.gameName)}#${esc(acct.tagLine)}</h2>
          <div class="player-level">Level <b>${acct.summonerLevel ?? "-"}</b></div>
          ${liveHtml}
        </div>
      </div>
      <div class="player-stats">
        <div class="stat-card"><span class="stat-label">Last 30</span><b>${sum.matchesPlayed}</b></div>
        <div class="stat-card"><span class="stat-label">Wins</span><b class="win">${sum.wins}</b></div>
        <div class="stat-card"><span class="stat-label">Losses</span><b class="loss">${sum.losses}</b></div>
        <div class="stat-card"><span class="stat-label">Win Rate</span><b>${sum.winRate}%</b></div>
        <div class="stat-card"><span class="stat-label">KDA</span><b>${sum.kda}</b></div>
        <div class="stat-card"><span class="stat-label">Kills</span><b>${sum.kills}</b></div>
        <div class="stat-card"><span class="stat-label">Deaths</span><b>${sum.deaths}</b></div>
        <div class="stat-card"><span class="stat-label">Assists</span><b>${sum.assists}</b></div>
      </div>
      ${rankedHtml}
      ${mastery.length ? `<h3 class="section-title">Champion Mastery <span class="meta">top 5</span></h3>
      <div class="mastery-grid">${mastery}</div>` : ""}
      <h3 class="section-title">Most Played Champions <span class="meta">last 30 matches</span></h3>
      <div class="top-champs">${topChamps || '<p class="no-results">No matches found.</p>'}</div>
      <h3 class="section-title">Recent Matches</h3>
      <div class="recent-matches">${recent || '<p class="no-results">No matches found.</p>'}</div>
    `;
  }

  window.LONStats = { render };
})();
