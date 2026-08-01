(function () {
  "use strict";

  const VERSION_KEY = "lon:ddragon:v";
  const FALLBACK_VERSION = "15.3.1";

  function store(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch {
      /* private mode etc. */
    }
  }

  function load(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  async function ddragonVersion() {
    const cached = load(VERSION_KEY);
    if (cached) return cached;
    try {
      const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
      if (res.ok) {
        const list = await res.json();
        const v = list[0];
        if (v) {
          store(VERSION_KEY, v);
          return v;
        }
      }
    } catch {
      /* offline */
    }
    return FALLBACK_VERSION;
  }

  function splashUrl(championId, version) {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${encodeURIComponent(championId)}_0.jpg`;
  }

  function apply(profile) {
    const bg = (profile && profile.background) || "void";
    const champion = (profile && profile.champion) || "";

    document.body.style.removeProperty("--champ-bg");

    if (bg === "champion" && champion) {
      document.body.dataset.bg = "champion";
      ddragonVersion().then((v) => {
        document.body.style.setProperty("--champ-bg", `url("${splashUrl(champion, v)}")`);
      });
    } else {
      document.body.dataset.bg = bg;
    }
  }

  window.LONBg = { apply, ddragonVersion, splashUrl };
})();
