const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const OUT = path.join(ROOT, "data.js");
const CDN = "https://ddragon.leagueoflegends.com";
const SEEMETA = "https://seemeta.com/data";

const POS_LABEL = {
  TOP: "Top",
  JUNGLE: "Jungle",
  MIDDLE: "Mid",
  BOTTOM: "Bot",
  UTILITY: "Support",
};

const TREE_NAME = {
  8000: "Precision",
  8100: "Domination",
  8200: "Sorcery",
  8300: "Inspiration",
  8400: "Resolve",
};

const SUPPORT_ENCHANTER = ["Janna", "Lulu", "Milio", "Sona", "Soraka", "Nami", "Yuumi", "Renata", "Seraphine", "Karma", "Rakan", "Bard"];
const SUPPORT_MAGE = ["Lux", "Morgana", "Zilean", "Brand", "Zyra", "Velkoz", "Swain", "Neeko"];
const SUPPORT_TANK = ["Alistar", "Blitzcrank", "Braum", "Leona", "Nautilus", "Rell", "Taric", "Thresh", "Maokai", "TahmKench", "Poppy"];
const SUPPORT_DAMAGE = ["Pyke", "Senna", "Pantheon", "Camille"];
const AP_FIGHTER = ["Gwen", "Rumble", "Gragas", "Vladimir", "Lillia"];
const SKIRMISHER = ["Fiora", "Irelia", "Jax", "Tryndamere", "Trundle", "Volibear", "Udyr", "Warwick", "Belveth", "Viego"];
const AD_ASSASSIN = ["Zed", "Talon", "Qiyana", "Khazix", "Rengar", "Shaco", "Naafiri"];
const AP_JUNGLE_ASSASSIN = ["Elise", "Evelynn", "Nidalee"];
const ONHIT_ADC = ["Kalista", "Varus", "Vayne", "KogMaw"];
const CASTER_ADC = ["Lucian", "MissFortune", "Corki"];

const ARCHETYPES = {
  fighter: {
    startingItems: [1054, 2003],
    coreItems: [6631, 3047, 6610],
    itemSlots: [
      { label: "4th item", options: [{ id: 6333, pct: 60 }, { id: 3033, pct: 40 }] },
      { label: "5th item", options: [{ id: 3026, pct: 60 }, { id: 3742, pct: 40 }] },
    ],
    summonerSpells: [4, 12],
    runes: {
      primary: { treeId: 8000, keystone: 8010, minors: [9111, 9104, 8299] },
      secondary: { treeId: 8200, minors: [8210, 8236] },
      statShards: [5008, 5008, 5001],
    },
    skillOrder: [{ key: "Q", levels: 5 }, { key: "W", levels: 3 }, { key: "E", levels: 3 }, { key: "R", levels: 2 }],
  },
  jungleFighter: {
    startingItems: [1101, 2003],
    coreItems: [6692, 3111, 6610],
    itemSlots: [
      { label: "4th item", options: [{ id: 6333, pct: 60 }, { id: 3026, pct: 40 }] },
      { label: "5th item", options: [{ id: 3071, pct: 60 }, { id: 3033, pct: 40 }] },
    ],
    summonerSpells: [4, 11],
    runes: {
      primary: { treeId: 8000, keystone: 8010, minors: [9111, 9104, 8299] },
      secondary: { treeId: 8300, minors: [8304, 8347] },
      statShards: [5008, 5008, 5001],
    },
    skillOrder: [{ key: "Q", levels: 5 }, { key: "W", levels: 3 }, { key: "E", levels: 3 }, { key: "R", levels: 2 }],
  },
  tank: {
    startingItems: [1054, 2003],
    coreItems: [3084, 3047, 3068],
    itemSlots: [
      { label: "4th item", options: [{ id: 3742, pct: 60 }, { id: 4401, pct: 40 }] },
      { label: "5th item", options: [{ id: 3065, pct: 60 }, { id: 3110, pct: 40 }] },
    ],
    summonerSpells: [4, 12],
    runes: {
      primary: { treeId: 8400, keystone: 8437, minors: [8446, 8429, 8451] },
      secondary: { treeId: 8300, minors: [8304, 8347] },
      statShards: [5008, 5008, 5001],
    },
    skillOrder: [{ key: "Q", levels: 5 }, { key: "W", levels: 3 }, { key: "E", levels: 3 }, { key: "R", levels: 2 }],
  },
  apFighter: {
    startingItems: [1056, 2003],
    coreItems: [4633, 3047, 3116],
    itemSlots: [
      { label: "4th item", options: [{ id: 3157, pct: 60 }, { id: 6665, pct: 40 }] },
      { label: "5th item", options: [{ id: 3089, pct: 60 }, { id: 6653, pct: 40 }] },
    ],
    summonerSpells: [4, 12],
    runes: {
      primary: { treeId: 8000, keystone: 8010, minors: [9101, 9105, 8014] },
      secondary: { treeId: 8400, minors: [8444, 8451] },
      statShards: [5008, 5008, 5001],
    },
    skillOrder: [{ key: "Q", levels: 5 }, { key: "W", levels: 3 }, { key: "E", levels: 3 }, { key: "R", levels: 2 }],
  },
  skirmisher: {
    startingItems: [1086, 2003],
    coreItems: [3006, 3153, 6673],
    itemSlots: [
      { label: "4th item", options: [{ id: 3031, pct: 60 }, { id: 3026, pct: 40 }] },
      { label: "5th item", options: [{ id: 6672, pct: 60 }, { id: 3033, pct: 40 }] },
    ],
    summonerSpells: [4, 12],
    runes: {
      primary: { treeId: 8000, keystone: 8008, minors: [9111, 9104, 8014] },
      secondary: { treeId: 8400, minors: [8473, 8242] },
      statShards: [5005, 5008, 5001],
    },
    skillOrder: [{ key: "Q", levels: 5 }, { key: "W", levels: 3 }, { key: "E", levels: 3 }, { key: "R", levels: 2 }],
  },
  jungleLethality: {
    startingItems: [1101, 2003],
    coreItems: [6697, 3111, 6676],
    itemSlots: [
      { label: "4th item", options: [{ id: 3142, pct: 60 }, { id: 6694, pct: 40 }] },
      { label: "5th item", options: [{ id: 3026, pct: 60 }, { id: 3814, pct: 40 }] },
    ],
    summonerSpells: [4, 11],
    runes: {
      primary: { treeId: 8100, keystone: 8128, minors: [8143, 8140, 8135] },
      secondary: { treeId: 8000, minors: [8009, 8014] },
      statShards: [5008, 5008, 5001],
    },
    skillOrder: [{ key: "Q", levels: 5 }, { key: "W", levels: 3 }, { key: "E", levels: 3 }, { key: "R", levels: 2 }],
  },
  midMage: {
    startingItems: [1056, 2003],
    coreItems: [6655, 3020, 4645],
    itemSlots: [
      { label: "4th item", options: [{ id: 3157, pct: 60 }, { id: 3089, pct: 40 }] },
      { label: "5th item", options: [{ id: 3135, pct: 60 }, { id: 6653, pct: 40 }] },
    ],
    summonerSpells: [4, 12],
    runes: {
      primary: { treeId: 8300, keystone: 8369, minors: [8304, 8345, 8347] },
      secondary: { treeId: 8200, minors: [8226, 8237] },
      statShards: [5008, 5008, 5001],
    },
    skillOrder: [{ key: "Q", levels: 5 }, { key: "W", levels: 3 }, { key: "E", levels: 3 }, { key: "R", levels: 2 }],
  },
  apAssassin: {
    startingItems: [1056, 2003],
    coreItems: [3146, 3020, 4645],
    itemSlots: [
      { label: "4th item", options: [{ id: 3157, pct: 60 }, { id: 3089, pct: 40 }] },
      { label: "5th item", options: [{ id: 3135, pct: 60 }, { id: 3100, pct: 40 }] },
    ],
    summonerSpells: [4, 14],
    runes: {
      primary: { treeId: 8100, keystone: 8112, minors: [8139, 8140, 8105] },
      secondary: { treeId: 8400, minors: [8444, 8242] },
      statShards: [5008, 5008, 5001],
    },
    skillOrder: [{ key: "Q", levels: 5 }, { key: "W", levels: 3 }, { key: "E", levels: 3 }, { key: "R", levels: 2 }],
  },
  adAssassin: {
    startingItems: [1055, 2003],
    coreItems: [6692, 3111, 3142],
    itemSlots: [
      { label: "4th item", options: [{ id: 6676, pct: 60 }, { id: 6694, pct: 40 }] },
      { label: "5th item", options: [{ id: 3026, pct: 60 }, { id: 3814, pct: 40 }] },
    ],
    summonerSpells: [4, 14],
    runes: {
      primary: { treeId: 8100, keystone: 8112, minors: [8139, 8140, 8105] },
      secondary: { treeId: 8000, minors: [8009, 8014] },
      statShards: [5008, 5008, 5001],
    },
    skillOrder: [{ key: "Q", levels: 5 }, { key: "W", levels: 3 }, { key: "E", levels: 3 }, { key: "R", levels: 2 }],
  },
  critADC: {
    startingItems: [1086, 2003],
    coreItems: [2523, 3006, 3046],
    itemSlots: [
      { label: "4th item", options: [{ id: 3031, pct: 70 }, { id: 3036, pct: 30 }] },
      { label: "5th item", options: [{ id: 3036, pct: 60 }, { id: 3094, pct: 40 }] },
    ],
    summonerSpells: [4, 21],
    runes: {
      primary: { treeId: 8000, keystone: 8008, minors: [9111, 9103, 8014] },
      secondary: { treeId: 8300, minors: [8304, 8345] },
      statShards: [5005, 5008, 5001],
    },
    skillOrder: [{ key: "Q", levels: 5 }, { key: "W", levels: 3 }, { key: "E", levels: 3 }, { key: "R", levels: 2 }],
  },
  onHitADC: {
    startingItems: [1086, 2003],
    coreItems: [6672, 3006, 3124],
    itemSlots: [
      { label: "4th item", options: [{ id: 3153, pct: 60 }, { id: 3085, pct: 40 }] },
      { label: "5th item", options: [{ id: 3085, pct: 60 }, { id: 3033, pct: 40 }] },
    ],
    summonerSpells: [4, 21],
    runes: {
      primary: { treeId: 8000, keystone: 8008, minors: [8009, 9104, 8014] },
      secondary: { treeId: 8300, minors: [8304, 8345] },
      statShards: [5005, 5008, 5001],
    },
    skillOrder: [{ key: "Q", levels: 5 }, { key: "W", levels: 3 }, { key: "E", levels: 3 }, { key: "R", levels: 2 }],
  },
  casterADC: {
    startingItems: [1055, 2003],
    coreItems: [6697, 3009, 6676],
    itemSlots: [
      { label: "4th item", options: [{ id: 3094, pct: 60 }, { id: 3036, pct: 40 }] },
      { label: "5th item", options: [{ id: 3036, pct: 60 }, { id: 3031, pct: 40 }] },
    ],
    summonerSpells: [4, 21],
    runes: {
      primary: { treeId: 8000, keystone: 8021, minors: [8009, 9104, 8014] },
      secondary: { treeId: 8200, minors: [8226, 8237] },
      statShards: [5005, 5008, 5001],
    },
    skillOrder: [{ key: "Q", levels: 5 }, { key: "W", levels: 3 }, { key: "E", levels: 3 }, { key: "R", levels: 2 }],
  },
  supportEnchanter: {
    startingItems: [3865, 2003],
    coreItems: [6617, 3158, 3107],
    itemSlots: [
      { label: "4th item", options: [{ id: 3504, pct: 60 }, { id: 6616, pct: 40 }] },
      { label: "5th item", options: [{ id: 6621, pct: 60 }, { id: 3222, pct: 40 }] },
    ],
    summonerSpells: [4, 14],
    runes: {
      primary: { treeId: 8200, keystone: 8214, minors: [8226, 8210, 8237] },
      secondary: { treeId: 8400, minors: [8473, 8453] },
      statShards: [5008, 5008, 5013],
    },
    skillOrder: [{ key: "Q", levels: 5 }, { key: "W", levels: 3 }, { key: "E", levels: 3 }, { key: "R", levels: 2 }],
  },
  supportMage: {
    startingItems: [3865, 2003],
    coreItems: [4005, 3020, 6653],
    itemSlots: [
      { label: "4th item", options: [{ id: 3157, pct: 60 }, { id: 4645, pct: 40 }] },
      { label: "5th item", options: [{ id: 3089, pct: 60 }, { id: 3135, pct: 40 }] },
    ],
    summonerSpells: [4, 14],
    runes: {
      primary: { treeId: 8200, keystone: 8229, minors: [8226, 8210, 8237] },
      secondary: { treeId: 8300, minors: [8304, 8347] },
      statShards: [5008, 5008, 5001],
    },
    skillOrder: [{ key: "Q", levels: 5 }, { key: "W", levels: 3 }, { key: "E", levels: 3 }, { key: "R", levels: 2 }],
  },
  supportTank: {
    startingItems: [3865, 2003],
    coreItems: [3190, 3158, 3109],
    itemSlots: [
      { label: "4th item", options: [{ id: 3050, pct: 60 }, { id: 3107, pct: 40 }] },
      { label: "5th item", options: [{ id: 3002, pct: 60 }, { id: 4401, pct: 40 }] },
    ],
    summonerSpells: [4, 14],
    runes: {
      primary: { treeId: 8400, keystone: 8439, minors: [8401, 8473, 8242] },
      secondary: { treeId: 8300, minors: [8304, 8347] },
      statShards: [5008, 5008, 5013],
    },
    skillOrder: [{ key: "Q", levels: 5 }, { key: "W", levels: 3 }, { key: "E", levels: 3 }, { key: "R", levels: 2 }],
  },
  supportDamage: {
    startingItems: [3865, 2003],
    coreItems: [3179, 3009, 3142],
    itemSlots: [
      { label: "4th item", options: [{ id: 6676, pct: 60 }, { id: 3814, pct: 40 }] },
      { label: "5th item", options: [{ id: 3036, pct: 60 }, { id: 3026, pct: 40 }] },
    ],
    summonerSpells: [4, 14],
    runes: {
      primary: { treeId: 8100, keystone: 9923, minors: [8143, 8140, 8105] },
      secondary: { treeId: 8000, minors: [8009, 8014] },
      statShards: [5008, 5008, 5001],
    },
    skillOrder: [{ key: "Q", levels: 5 }, { key: "W", levels: 3 }, { key: "E", levels: 3 }, { key: "R", levels: 2 }],
  },
};

function hasBuild(entry) {
  return !!(entry && entry.builds && entry.builds.length);
}

function jungleize(arch) {
  return { ...arch, startingItems: [1101, 2003], summonerSpells: [4, 11] };
}

function pickArchetype(name, tags, position) {
  const has = (...t) => t.some((x) => tags.includes(x));
  if (position === "UTILITY") {
    if (SUPPORT_TANK.includes(name)) return ARCHETYPES.supportTank;
    if (SUPPORT_DAMAGE.includes(name)) return ARCHETYPES.supportDamage;
    if (SUPPORT_MAGE.includes(name)) return ARCHETYPES.supportMage;
    if (SUPPORT_ENCHANTER.includes(name)) return ARCHETYPES.supportEnchanter;
    if (has("Tank")) return ARCHETYPES.supportTank;
    return ARCHETYPES.supportEnchanter;
  }
  if (position === "BOTTOM") {
    if (ONHIT_ADC.includes(name)) return ARCHETYPES.onHitADC;
    if (CASTER_ADC.includes(name)) return ARCHETYPES.casterADC;
    return ARCHETYPES.critADC;
  }
  if (position === "TOP") {
    if (AP_FIGHTER.includes(name)) return ARCHETYPES.apFighter;
    if (SKIRMISHER.includes(name)) return ARCHETYPES.skirmisher;
    if (has("Tank")) return ARCHETYPES.tank;
    if (has("Mage") && has("Fighter")) return ARCHETYPES.apFighter;
    if (has("Mage")) return ARCHETYPES.midMage;
    return ARCHETYPES.fighter;
  }
  if (position === "MIDDLE") {
    if (name === "Akshan") return ARCHETYPES.critADC;
    if (SKIRMISHER.includes(name)) return ARCHETYPES.skirmisher;
    if (has("Assassin")) {
      if (AD_ASSASSIN.includes(name)) return ARCHETYPES.adAssassin;
      return ARCHETYPES.apAssassin;
    }
    if (has("Mage") && has("Fighter")) return ARCHETYPES.apFighter;
    return ARCHETYPES.midMage;
  }
  if (position === "JUNGLE") {
    if (name === "Ivern") return ARCHETYPES.supportEnchanter;
    if (name === "MasterYi") return ARCHETYPES.onHitADC;
    if (SKIRMISHER.includes(name)) return ARCHETYPES.skirmisher;
    if (has("Tank") && !has("Fighter")) return ARCHETYPES.tank;
    if (has("Assassin")) {
      if (AD_ASSASSIN.includes(name) || has("Marksman")) return ARCHETYPES.jungleLethality;
      if (has("Fighter")) return ARCHETYPES.jungleFighter;
      return ARCHETYPES.apAssassin;
    }
    if (has("Marksman")) return ARCHETYPES.jungleLethality;
    if (has("Mage") && has("Fighter")) return ARCHETYPES.apFighter;
    if (has("Mage")) return ARCHETYPES.midMage;
    return ARCHETYPES.jungleFighter;
  }
  return ARCHETYPES.fighter;
}

function clean(text) {
  if (!text) return "";
  return text
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/(?:span|font|b|i|strong)>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/%i:[^%]+%/g, "")
    .replace(/\s+/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}

async function getJSON(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`${res.status} for ${url}`);
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
    }
  }
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} for ${url}`);
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
}

function bestLaneEntries(champions) {
  const map = new Map();
  for (const c of champions) {
    const existing = map.get(c.id) || [];
    existing.push(c);
    map.set(c.id, existing);
  }
  const best = new Map();
  for (const [id, entries] of map) {
    entries.sort((a, b) => (b.games || 0) - (a.games || 0));
    best.set(id, entries[0]);
  }
  return best;
}

function buildSkillOrder(order) {
  if (!order || !order.length) return null;
  const counts = { Q: 0, W: 0, E: 0, R: 0 };
  for (const k of order) if (k in counts) counts[k]++;
  return ["Q", "W", "E", "R"]
    .sort((a, b) => counts[b] - counts[a])
    .map((k) => ({ key: k, levels: counts[k] }));
}

function condenseItemOptions(slotArr) {
  if (!Array.isArray(slotArr)) return [];
  const total = slotArr.reduce((s, x) => s + (x.games || 0), 0);
  return slotArr
    .slice(0, 3)
    .map((x) => ({
      id: x.itemId,
      games: x.games,
      winPrc: Math.round(x.winPrc),
      pct: total > 0 ? Math.round((x.games / total) * 100) : 0,
    }));
}

const MERAKI = "https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions";
const MERAKI_CACHE = path.join(require("os").tmpdir(), "opencode", "meraki");
const DMG_TYPE = { PHYSICAL_DAMAGE: "physical", MAGIC_DAMAGE: "magic", TRUE_DAMAGE: "true", MIXED_DAMAGE: "mixed" };
const RES_LABEL = { MANA: "Mana", MANA_PER_SECOND: "Mana/sec", ENERGY: "Energy", HEALTH: "Health", CURRENT_HEALTH: "Health", MAXIMUM_HEALTH: "Health", OTHER: "Health", CHARGE: "Charge", FURY: "Fury", GRIT: "Grit" };

function fmtNum(v) {
  const n = Number(v);
  if (Number.isNaN(n)) return String(v);
  if (Number.isInteger(n)) return String(n);
  return String(Math.round(n * 100) / 100);
}

function dedupe(arr) {
  return [...new Set(arr)];
}

function cleanUnit(u) {
  return (u || "")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/of target's maximum health/gi, "of target's max HP")
    .replace(/of target's missing health/gi, "of target's missing HP");
}

const SKIP_DMG = /^bonus (attack damage|attack speed|armor|magic resist|health|ability power|ad)$/i;
const CANON_DMG = /^((magic|physical|true|mixed)\s+)?damage$/i;

function extractDmgFrom(spell) {
  const type = DMG_TYPE[spell.damageType] || "";
  let fallback = null;
  for (const eff of spell.effects || []) {
    for (const lvl of eff.leveling || []) {
      const attr = lvl.attribute || "";
      if (!/damage/i.test(attr)) continue;
      if (SKIP_DMG.test(attr)) continue;
      const mods = (lvl.modifiers || []).filter((m) => m && m.values && m.values.length);
      if (!mods.length) continue;
      if (!mods.some((m) => Number(m.values[m.values.length - 1]) !== 0)) continue;
      const flats = mods.filter((m) => !cleanUnit(m.units && m.units[0]));
      const scalings = mods.filter((m) => cleanUnit(m.units && m.units[0]));
      const parts = [];
      if (flats[0]) parts.push(fmtNum(flats[0].values[flats[0].values.length - 1]));
      for (const s of scalings) parts.push(`${fmtNum(s.values[s.values.length - 1])}${cleanUnit(s.units[0])}`);
      const text = parts.join(" + ") + (type ? ` ${type} damage` : "");
      if (CANON_DMG.test(attr)) return text;
      if (!fallback) fallback = text;
    }
  }
  return fallback;
}

function abilityStats(spell) {
  const res = {};
  if (!spell) return res;
  const subs = [];
  const collect = (a) => {
    if (!a || typeof a !== "object") return;
    if (a.effects) subs.push(a);
    else for (const k of Object.keys(a)) collect(a[k]);
  };
  collect(spell);
  if (!subs.length) return res;

  for (const s of subs) {
    if (!res.cost && s.cost && s.cost.modifiers && s.cost.modifiers[0]) {
      const vals = dedupe((s.cost.modifiers[0].values || []).map(fmtNum)).join("/");
      if (vals) {
        const label = RES_LABEL[s.resource] || (s.resource ? s.resource.charAt(0) + s.resource.slice(1).toLowerCase() : "Cost");
        res.cost = `${label} ${vals}`;
      }
    }
    if (!res.cd && s.cooldown && s.cooldown.modifiers && s.cooldown.modifiers[0]) {
      const arr = dedupe((s.cooldown.modifiers[0].values || []).map(fmtNum));
      if (arr.length) res.cd = arr.length > 4 ? `${arr[0]} → ${arr[arr.length - 1]}s` : `${arr.join("/")}s`;
    }
  }

  const dmgLines = [];
  for (const s of subs) {
    const text = extractDmgFrom(s);
    if (text) dmgLines.push(s.name ? `${s.name}: ${text}` : text);
  }
  if (dmgLines.length === 1) {
    const [single] = dmgLines;
    res.dmg = single.includes(": ") && subs.length === 1 ? single.split(": ")[1] : single;
  } else if (dmgLines.length > 1) {
    res.dmg = dmgLines;
  }
  return res;
}

async function getMeraki(id) {
  const file = path.join(MERAKI_CACHE, `${id}.json`);
  fs.mkdirSync(MERAKI_CACHE, { recursive: true });
  if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, "utf8"));
  const j = await getJSON(`${MERAKI}/${id}.json`);
  fs.writeFileSync(file, JSON.stringify(j), "utf8");
  return j;
}

async function run() {
  const championsJson = await getJSON(`${CDN}/cdn/16.15.1/data/en_US/champion.json`);
  const keyToId = {};
  for (const c of Object.values(championsJson.data)) keyToId[c.key] = c.id;

  const [tier, items, runes, spells] = await Promise.all([
    getJSON(`${SEEMETA}/lol-tier.en.json`),
    getJSON(`${SEEMETA}/lol-items.en.json`),
    getJSON(`${SEEMETA}/lol-runes.en.json`),
    getJSON(`${SEEMETA}/lol-spells.en.json`),
  ]);

  const itemById = new Map(items.map((i) => [String(i.riotKey), i]));
  const runeById = new Map(runes.map((r) => [String(r.riotKey), r]));
  const spellById = new Map(spells.filter((s) => s.kind === "summoner").map((s) => [String(s.riotKey), s]));
  const champNameById = new Map(tier.champions.map((c) => [c.id, c.nameEn]));

  const best = bestLaneEntries(tier.champions);
  const lanes = new Map();
  for (const c of tier.champions) {
    if (!lanes.has(c.id)) lanes.set(c.id, []);
    lanes.get(c.id).push(c);
  }
  console.log(`Tier data: ${tier.champions.length} lane entries, ${best.size} champions (patch ${tier.patch})`);

  const currentData = fs.readFileSync(path.join(ROOT, "data.js"), "utf8");
  const CHAMPIONS = new Function(currentData + " return CHAMPIONS;")();

  const dlItems = new Set();
  const dlRunes = new Set();
  const dlSpells = new Set();

  const applyArchetype = (champ, entry, arch) => {
    const fmtItems = (arr) => arr.map((id) => itemById.get(String(id))).filter(Boolean).map((i) => ({ id: i.riotKey, name: i.name }));
    const fmtRune = (id) => {
      const r = runeById.get(String(id));
      return r ? { id: r.riotKey, name: r.name } : null;
    };
    const spells = arch.summonerSpells.map((id) => spellById.get(String(id))).filter(Boolean).map((s) => ({ id: s.riotKey, name: s.name }));

    champ.build = {
      role: POS_LABEL[entry.position] || entry.position,
      tier: entry.tier,
      winPrc: Math.round(entry.winPrc),
      pickRate: entry.pickRate,
      games: entry.games,
      summonerSpells: spells,
      startingItems: fmtItems(arch.startingItems),
      coreItems: fmtItems(arch.coreItems),
      itemSlots: arch.itemSlots.map((s) => ({
        label: s.label,
        options: s.options.map((o) => ({ id: o.id, name: itemById.get(String(o.id))?.name, pct: o.pct, winPrc: null })),
      })),
      skillOrder: arch.skillOrder,
      runes: {
        primary: {
          tree: TREE_NAME[arch.runes.primary.treeId],
          treeId: arch.runes.primary.treeId,
          keystone: fmtRune(arch.runes.primary.keystone),
          minors: arch.runes.primary.minors.map(fmtRune).filter(Boolean),
        },
        secondary: {
          tree: TREE_NAME[arch.runes.secondary.treeId],
          treeId: arch.runes.secondary.treeId,
          minors: arch.runes.secondary.minors.map(fmtRune).filter(Boolean),
        },
        statShards: arch.runes.statShards.map(fmtRune).filter(Boolean),
      },
    };

    for (const id of [...arch.startingItems, ...arch.coreItems, ...arch.itemSlots.flatMap((s) => s.options.map((o) => o.id))])
      dlItems.add(String(id));
    for (const id of arch.summonerSpells) dlSpells.add(String(id));
    for (const id of [arch.runes.primary.keystone, ...arch.runes.primary.minors, ...arch.runes.secondary.minors, ...arch.runes.statShards])
      dlRunes.add(String(id));
  };

  let matched = 0;
  for (const champ of CHAMPIONS) {
    const ddragonKey = Object.keys(keyToId).find((k) => keyToId[k] === champ.id);
    const keyNum = ddragonKey ? Number(ddragonKey) : null;
    let entry = keyNum != null ? best.get(keyNum) : null;
    if (entry && !hasBuild(entry)) {
      const alt = (lanes.get(keyNum) || []).find(hasBuild);
      if (alt) entry = alt;
    }
    if (!entry) continue;
    matched++;

    const build = entry.builds && entry.builds[0];
    if (build) {
      const starting = (build.startingItems?.items || []).map((id) => itemById.get(String(id))).filter(Boolean);
      const core = (build.coreItems?.items || []).map((id) => itemById.get(String(id))).filter(Boolean);
      const slots = [
        { label: "4th item", options: condenseItemOptions(build.item4) },
        { label: "5th item", options: condenseItemOptions(build.item5) },
        { label: "6th item", options: condenseItemOptions(build.item6) },
        { label: "Optional", options: condenseItemOptions(build.item7) },
      ].filter((s) => s.options.length);

      const runeId = (x) => (x == null ? null : runeById.get(String(x)));
      const primary = runeId(build.runes.primaryStyle);
      const secondary = runeId(build.runes.subStyle);
      const keystone = runeId(build.runes.primaryKeystone);
      const primaryMinors = (build.runes.primaryRunes || []).map(runeId).filter(Boolean);
      const subMinors = (build.runes.subRunes || []).map(runeId).filter(Boolean);
      const statShards = [build.runes.statPerks?.offense, build.runes.statPerks?.flex, build.runes.statPerks?.defense]
        .map(runeId)
        .filter(Boolean);

      for (const it of [...starting, ...core, ...slots.flatMap((s) => s.options.map((o) => itemById.get(String(o.id)))).filter(Boolean)])
        dlItems.add(String(it.riotKey));
      for (const r of [primary, secondary, keystone, ...primaryMinors, ...subMinors, ...statShards])
        if (r) dlRunes.add(String(r.riotKey));
      for (const sid of build.summonerSpells?.ids || []) dlSpells.add(String(sid));

      const primaryStyleId = build.runes.primaryStyle;
      const subStyleId = build.runes.subStyle;

      champ.build = {
        role: POS_LABEL[entry.position] || entry.position,
        tier: entry.tier,
        winPrc: Math.round(entry.winPrc),
        pickRate: entry.pickRate,
        games: entry.games,
        summonerSpells: (build.summonerSpells?.ids || [])
          .map((id) => spellById.get(String(id)))
          .filter(Boolean)
          .map((s) => ({ id: s.riotKey, name: s.name })),
        startingItems: starting.map((i) => ({ id: i.riotKey, name: i.name })),
        coreItems: core.map((i) => ({ id: i.riotKey, name: i.name })),
        itemSlots: slots.map((s) => ({
          label: s.label,
          options: s.options.map((o) => ({ id: o.id, name: itemById.get(String(o.id))?.name, pct: o.pct, winPrc: o.winPrc })),
        })),
        skillOrder: buildSkillOrder(build.skillPriority?.order),
        runes: {
          primary: {
            tree: TREE_NAME[primaryStyleId] || primary?.name || null,
            treeId: primaryStyleId,
            keystone: keystone ? { id: keystone.riotKey, name: keystone.name } : null,
            minors: primaryMinors.map((r) => ({ id: r.riotKey, name: r.name })),
          },
          secondary: {
            tree: TREE_NAME[subStyleId] || secondary?.name || null,
            treeId: subStyleId,
            minors: subMinors.map((r) => ({ id: r.riotKey, name: r.name })),
          },
          statShards: statShards.map((r) => ({ id: r.riotKey, name: r.name })),
        },
      };
    }

    const matchups = (entry.laneMatchups || []).filter((m) => m.games >= 3 && m.winPrc > 0 && m.winPrc < 100);
    if (matchups.length) {
      const fmt = (m) => ({
        name: champNameById.get(m.opponentChampionId) || null,
        id: m.opponentChampionId,
        winPrc: Math.round(m.winPrc),
        games: m.games,
      });
      const weak = matchups.filter((m) => m.winPrc < 50).sort((a, b) => a.winPrc - b.winPrc).slice(0, 3);
      const strong = matchups.filter((m) => m.winPrc > 50).sort((a, b) => b.winPrc - a.winPrc).slice(0, 3);
      champ.counters = {
        best: weak.length ? fmt(weak[0]) : null,
        weak: weak.map(fmt).filter((c) => c.name),
        strong: strong.map(fmt).filter((c) => c.name),
      };
    }
  }

  console.log(`Matched ${matched}/${CHAMPIONS.length} champions to tier data`);

  let archetyped = 0;
  for (const champ of CHAMPIONS) {
    if (champ.build) continue;
    const ddragonKey = Object.keys(keyToId).find((k) => keyToId[k] === champ.id);
    const keyNum = ddragonKey ? Number(ddragonKey) : null;
    const entry = keyNum != null ? best.get(keyNum) : null;
    if (!entry) continue;
    const arch = pickArchetype(champ.id, champ.roles || [], entry.position);
    if (!arch) continue;
    applyArchetype(champ, entry, entry.position === "JUNGLE" ? jungleize(arch) : arch);
    archetyped++;
  }
  console.log(`Real builds: ${CHAMPIONS.filter((c) => c.build).length}, archetype builds added: ${archetyped}`);

  let abilityStatsDone = 0;
  for (const champ of CHAMPIONS) {
    const first = champ.abilities && champ.abilities[0];
    if (first && (first.cd !== undefined || first.cost !== undefined || first.dmg !== undefined)) continue;
    let meraki;
    try {
      meraki = await getMeraki(champ.id);
    } catch (err) {
      console.log(`Meraki fetch failed for ${champ.id}: ${err.message}`);
      continue;
    }
    const pStats = abilityStats(meraki.abilities && meraki.abilities.P);
    if (pStats.dmg && champ.passive) champ.passive.dmg = pStats.dmg;
    for (const a of champ.abilities || []) {
      const stats = abilityStats(meraki.abilities && meraki.abilities[a.key]);
      if (stats.dmg) a.dmg = stats.dmg;
      if (stats.cost) a.cost = stats.cost;
      if (stats.cd) a.cd = stats.cd;
    }
    abilityStatsDone++;
  }
  console.log(`Ability stats added: ${abilityStatsDone}/${CHAMPIONS.length}`);

  console.log(`Unique item icons: ${dlItems.size}, rune icons: ${dlRunes.size}, spell icons: ${dlSpells.size}`);

  const version = "16.15.1";
  const dirs = {
    [path.join(ROOT, "icons", "items")]: [...dlItems].map((id) => ({ id, url: `${CDN}/cdn/${version}/img/item/${id}.png` })),
    [path.join(ROOT, "icons", "runes")]: [...dlRunes].map((id) => {
      const r = runeById.get(String(id));
      return { id, url: r?.img };
    }).filter((x) => x.url),
    [path.join(ROOT, "icons", "spells")]: [...dlSpells].map((id) => {
      const s = spellById.get(String(id));
      return { id, url: s?.img };
    }).filter((x) => x.url),
  };

  const tasks = [];
  for (const [dir, list] of Object.entries(dirs)) {
    fs.mkdirSync(dir, { recursive: true });
    for (const { id, url } of list) tasks.push(download(url, path.join(dir, `${id}.png`)));
  }
  let done = 0;
  await Promise.all(tasks.map(async (t) => { await t; done++; if (done % 50 === 0 || done === tasks.length) console.log(`Icons: ${done}/${tasks.length}`); }));
  console.log("All icons downloaded.");

  fs.writeFileSync(OUT, "const CHAMPIONS = " + JSON.stringify(CHAMPIONS, null, 2) + ";\n", "utf8");
  console.log(`Wrote data.js (${Math.round(fs.statSync(OUT).size / 1024)} KB)`);
}

run().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
