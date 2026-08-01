(function () {
  "use strict";

  const input = document.getElementById("playerSearch");
  const goBtn = document.getElementById("playerGo");
  const loading = document.getElementById("playerLoading");
  const errorBox = document.getElementById("playerError");
  const results = document.getElementById("playerResults");

  const iconByKey = new Map();
  CHAMPIONS.forEach((c) => {
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

  function fallbackAvatar(el) {
    el.onerror = null;
    const letter = (el.alt || "?").charAt(0).toUpperCase();
    const parent = el.closest(".player-icon") || el.parentElement;
    parent.innerHTML = `<span class="fallback-letter">${letter}</span>`;
  }

  function parseName(inputValue) {
    const value = inputValue.trim();
    const hash = value.lastIndexOf("#");
    if (hash === -1 || hash === value.length - 1) return null;
    const name = value.slice(0, hash).trim();
    const tag = value.slice(hash + 1).trim();
    if (!name || !tag) return null;
    return { name, tag };
  }

  function setBusy(busy) {
    goBtn.disabled = busy;
    goBtn.textContent = busy ? "Searching..." : "Search";
  }

  function showError(msg, kind) {
    document.getElementById("playerErrorText").textContent = msg;
    errorBox.classList.remove("hidden");
    errorBox.classList.toggle("warn", kind === "api_key" || kind === "rate_limit");
    errorBox.classList.toggle("notfound", kind === "not_found");
    loading.classList.add("hidden");
    results.classList.add("hidden");
  }

  function showLoading() {
    errorBox.classList.add("hidden");
    results.classList.add("hidden");
    loading.classList.remove("hidden");
  }

  async function search() {
    const parsed = parseName(input.value);
    if (!parsed) {
      showError("Enter a name and tag, e.g. Thebausffs#EUW");
      return;
    }
    setBusy(true);
    showLoading();
    try {
      const res = await fetch(`/api/player?name=${encodeURIComponent(parsed.name)}&tag=${encodeURIComponent(parsed.tag)}`);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw { message: data.error || "Could not load player stats.", kind: data.kind };
      render(data);
      results.classList.remove("hidden");
      loading.classList.add("hidden");
      results.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      showError(err.message || "Could not load player stats.", err.kind);
    } finally {
      setBusy(false);
    }
  }

  function render(data) {
    const acct = data.account;
    const sum = data.summary;
    const v = data.ddragonVersion;

    document.getElementById("playerName").textContent = `${acct.gameName}#${acct.tagLine}`;
    document.getElementById("playerLevel").textContent = acct.summonerLevel ?? "-";

    const icon = document.getElementById("playerIcon");
    if (acct.profileIconId) {
      icon.src = `https://ddragon.leagueoflegends.com/cdn/${encodeURIComponent(v)}/img/profileicon/${acct.profileIconId}.png`;
      icon.alt = acct.gameName;
      icon.onerror = () => fallbackAvatar(icon);
    } else {
      fallbackAvatar(icon);
    }

    document.getElementById("statMatches").textContent = sum.matchesPlayed;
    document.getElementById("statWins").textContent = sum.wins;
    document.getElementById("statLosses").textContent = sum.losses;
    document.getElementById("statWinRate").textContent = `${sum.winRate}%`;
    document.getElementById("statKda").textContent = sum.kda;
    document.getElementById("statKills").textContent = sum.kills;
    document.getElementById("statDeaths").textContent = sum.deaths;
    document.getElementById("statAssists").textContent = sum.assists;

    document.getElementById("topChamps").innerHTML = data.topChampions
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

    document.getElementById("recentMatches").innerHTML = data.recent
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
      .join("") || '<p class="no-results">No matches found.</p>';
  }

  function fmtDuration(sec) {
    if (!sec) return "";
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  }

  goBtn.addEventListener("click", search);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") search();
  });
})();
