import path from "path";
import crypto from "crypto";
import { existsSync } from "fs";
import { fileURLToPath } from "url";
import express from "express";
import admin from "firebase-admin";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PORT = process.env.PORT || 3000;

dotenv.config({ path: path.join(__dirname, ".env") });

const RIOT_CLIENT_ID = process.env.RIOT_CLIENT_ID || "";
const RIOT_CLIENT_SECRET = process.env.RIOT_CLIENT_SECRET || "";
const RIOT_REDIRECT_URI =
  process.env.RIOT_REDIRECT_URI || `http://localhost:${PORT}/api/riot/callback`;
const RIOT_REGION = process.env.RIOT_REGION || "europe";

const RIOT_API_KEY = process.env.RIOT_API_KEY || "";
const RIOT_PLATFORM =
  process.env.RIOT_PLATFORM || { americas: "na1", asia: "kr", europe: "euw1" }[RIOT_REGION] || "euw1";

const RIOT_AUTH_URL = "https://auth.riotgames.com/authorize";
const RIOT_TOKEN_URL = "https://auth.riotgames.com/token";

let fbConfigured = false;
const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON || "";
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT
  ? path.resolve(__dirname, process.env.FIREBASE_SERVICE_ACCOUNT)
  : "";
try {
  if (serviceAccountJson) {
    admin.initializeApp({ credential: admin.credential.cert(JSON.parse(serviceAccountJson)) });
    fbConfigured = true;
  } else if (serviceAccountPath && existsSync(serviceAccountPath)) {
    admin.initializeApp({ credential: admin.credential.cert(serviceAccountPath) });
    fbConfigured = true;
  } else if (serviceAccountPath) {
    console.warn(`Firebase service account not found: ${serviceAccountPath}`);
  }
} catch (err) {
  console.warn("Firebase service account failed to load:", err.message);
}

const STATES = new Map();
const STATE_TTL = 10 * 60 * 1000;

setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of STATES) {
    if (now > entry.exp) STATES.delete(key);
  }
}, 60 * 1000);

function randomState() {
  return crypto.randomBytes(24).toString("hex");
}

async function exchangeCode(code) {
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: RIOT_REDIRECT_URI,
    client_id: RIOT_CLIENT_ID,
    client_secret: RIOT_CLIENT_SECRET,
  });
  const res = await fetch(RIOT_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  if (!res.ok) {
    throw new Error(`Riot token exchange failed: ${res.status} ${await res.text()}`);
  }
  return res.json();
}

async function getAccount(accessToken) {
  const url = `https://${RIOT_REGION}.api.riotgames.com/riot/account/v1/accounts/me`;
  let lastErr = null;
  for (let i = 0; i < 4; i++) {
    try {
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (res.ok) return res.json();
      lastErr = new Error(`Riot account lookup failed: ${res.status}`);
    } catch (err) {
      lastErr = err;
    }
    await new Promise((r) => setTimeout(r, 750 * (i + 1)));
  }
  throw lastErr || new Error("Riot account lookup failed");
}

function bearer(req) {
  return (req.headers.authorization || "").replace(/^Bearer /, "");
}

// ----- Riot developer API helpers (player stats) -----

const CACHE = new Map();

async function cached(key, ttlMs, fn) {
  const hit = CACHE.get(key);
  if (hit && hit.exp > Date.now()) return hit.value;
  const value = await fn();
  CACHE.set(key, { value, exp: Date.now() + ttlMs });
  return value;
}

function apiError(status) {
  if (status === 403) {
    return { error: "Player stats are temporarily unavailable (Riot API key expired). Try again later.", kind: "api_key" };
  }
  if (status === 429) {
    return { error: "Too many requests to Riot. Wait a minute and try again.", kind: "rate_limit" };
  }
  return { error: "Could not reach the Riot API. Try again in a moment.", kind: "generic" };
}

async function riotFetch(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    const res = await fetch(url, { headers: { "X-Riot-Token": RIOT_API_KEY } });
    if (res.status === 404) return { status: 404, data: null };
    if (res.status === 429 && i < retries - 1) {
      await new Promise((r) => setTimeout(r, 1200 * (i + 1)));
      continue;
    }
    if (!res.ok) return { status: res.status, data: null };
    return { status: 200, data: await res.json() };
  }
  return { status: 429, data: null };
}

async function getDdragonVersion() {
  return cached("ddragon:version", 24 * 60 * 60 * 1000, async () => {
    const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
    if (!res.ok) return "15.3.1";
    const versions = await res.json();
    return versions[0];
  });
}

async function mapLimit(arr, limit, fn) {
  const out = new Array(arr.length);
  let i = 0;
  const workers = Array.from({ length: Math.min(limit, arr.length) }, async () => {
    while (i < arr.length) {
      const idx = i++;
      out[idx] = await fn(arr[idx]);
    }
  });
  await Promise.all(workers);
  return out;
}

function round1(n) {
  return Math.round(n * 10) / 10;
}

async function getChampionNames() {
  return cached("ddragon:champs", 24 * 60 * 60 * 1000, async () => {
    const v = await getDdragonVersion();
    const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${v}/data/en_US/champion.json`);
    if (!res.ok) return new Map();
    const data = await res.json();
    const map = new Map();
    for (const c of Object.values(data.data)) map.set(c.key, c.id);
    return map;
  });
}

async function buildRanked(puuid) {
  const out = { solo: null, flex: null };
  if (!puuid) return out;
  const res = await riotFetch(
    `https://${RIOT_PLATFORM}.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}`
  );
  const entries = Array.isArray(res.data) ? res.data : [];
  for (const e of entries) {
    const total = e.wins + e.losses;
    const obj = {
      tier: e.tier,
      rank: e.rank,
      lp: e.leaguePoints,
      wins: e.wins,
      losses: e.losses,
      winRate: total ? round1((e.wins / total) * 100) : 0,
      hotStreak: !!e.hotStreak,
    };
    if (e.queueType === "RANKED_SOLO_5x5" || e.queueType === "JADE_RANKED_SOLO_5x5") {
      if (!out.solo || e.queueType === "RANKED_SOLO_5x5") out.solo = obj;
    } else if (e.queueType === "RANKED_FLEX_SR" || e.queueType === "RANKED_PREMADE_5x5") {
      if (!out.flex || e.queueType === "RANKED_FLEX_SR") out.flex = obj;
    }
  }
  return out;
}

async function buildMastery(puuid, names) {
  const res = await riotFetch(
    `https://${RIOT_PLATFORM}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`
  );
  const list = Array.isArray(res.data) ? res.data : [];
  return list.slice(0, 5).map((m) => ({
    championName: names.get(String(m.championId)) || `Champion ${m.championId}`,
    championLevel: m.championLevel,
    championPoints: m.championPoints,
  }));
}

async function buildLive(puuid, names) {
  if (!puuid) return { inGame: false };
  const res = await riotFetch(
    `https://${RIOT_PLATFORM}.api.riotgames.com/lol/spectator/v5/active-games/by-summoner/${puuid}`
  );
  const g = res.data;
  if (!g) return { inGame: false };
  const participants = (g.participants || []).map((p) => ({
    championName: names.get(String(p.championId)) || `Champion ${p.championId}`,
    teamId: p.teamId,
  }));
  const me = (g.participants || []).find((p) => p.puuid === puuid);
  return {
    inGame: true,
    queueId: g.gameQueueConfigId,
    gameLength: g.gameLength,
    championName: me
      ? names.get(String(me.championId)) || `Champion ${me.championId}`
      : "",
    participants,
  };
}

const META_PLAYERS = [
  { region: "europe", platform: "euw1", name: "Caps", tag: "EUW" },
  { region: "europe", platform: "euw1", name: "Yike", tag: "EUW" },
  { region: "europe", platform: "euw1", name: "Jankos", tag: "EUW" },
  { region: "europe", platform: "euw1", name: "Thebausffs", tag: "EUW" },
  { region: "europe", platform: "euw1", name: "xPetu", tag: "EUW" },
  { region: "europe", platform: "euw1", name: "broeki", tag: "EUW" },
  { region: "europe", platform: "euw1", name: "Bwipo", tag: "EUW" },
  { region: "europe", platform: "euw1", name: "Rekkles", tag: "EUW" },
  { region: "europe", platform: "euw1", name: "Humanoid", tag: "EUW" },
  { region: "americas", platform: "na1", name: "Doublelift", tag: "NA1" },
  { region: "americas", platform: "na1", name: "CoreJJ", tag: "NA1" },
  { region: "americas", platform: "na1", name: "Blaber", tag: "NA1" },
  { region: "asia", platform: "kr", name: "Hide on bush", tag: "KR1" },
  { region: "asia", platform: "kr", name: "Chovy", tag: "KR1" },
  { region: "asia", platform: "kr", name: "ShowMaker", tag: "KR1" },
];
const META_GAMES_PER_PLAYER = 30;
const META_REFRESH_MS = 12 * 60 * 60 * 1000;
const META_QUEUES = [400, 420, 430, 440];
const META_LANES = ["TOP", "JUNGLE", "MIDDLE", "BOTTOM", "UTILITY"];
const META_SIGNATURE = `${META_PLAYERS.length}:${META_GAMES_PER_PLAYER}`;

let samplingMeta = false;

function metaLaneOf(p) {
  let k = p.teamPosition;
  if (!k && p.role === "DUO_SUPPORT") k = "UTILITY";
  if (!k && p.lane) k = p.lane;
  k = String(k || "").toUpperCase();
  return META_LANES.includes(k) ? k : null;
}

async function sampleWorldwideMeta() {
  if (!fbConfigured || samplingMeta) return;
  samplingMeta = true;
  try {
    const db = admin.firestore();
    const prevDoc = await db.collection("meta").doc("_meta").get();
    const prev = prevDoc.exists ? prevDoc.data() : {};
    if (
      prev.generatedAt &&
      prev.signature === META_SIGNATURE &&
      Date.now() - new Date(prev.generatedAt).getTime() < META_REFRESH_MS
    ) {
      return;
    }

    const names = await getChampionNames();
    const agg = new Map();
    const resolved = [];
    const failed = [];
    const regions = new Set();

    await mapLimit(META_PLAYERS, 3, async (pl) => {
      const label = `${pl.name}#${pl.tag}`;
      try {
        const acct = await riotFetch(
          `https://${pl.region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(pl.name)}/${encodeURIComponent(pl.tag)}`
        );
        if (!acct.data) {
          failed.push(label);
          return;
        }
        const idsRes = await riotFetch(
          `https://${pl.region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${acct.data.puuid}/ids?start=0&count=${META_GAMES_PER_PLAYER}`
        );
        const matchIds = Array.isArray(idsRes.data) ? idsRes.data : [];
        const details = await mapLimit(matchIds, 2, async (mid) => {
          const r = await riotFetch(`https://${pl.region}.api.riotgames.com/lol/match/v5/matches/${mid}`);
          return r.data;
        });
        let counted = 0;
        for (const m of details) {
          if (!m || !m.info) continue;
          if (m.info.gameDuration < 300) continue;
          if (!META_QUEUES.includes(m.info.queueId)) continue;
          for (const p of m.info.participants || []) {
            if (!p || !p.championName) continue;
            const lane = metaLaneOf(p);
            if (!lane) continue;
            let st = agg.get(p.championName);
            if (!st) {
              st = { championName: p.championName, games: 0, wins: 0, byLane: {} };
              agg.set(p.championName, st);
            }
            st.games++;
            st.wins += p.win ? 1 : 0;
            let bl = st.byLane[lane];
            if (!bl) {
              bl = { games: 0, wins: 0 };
              st.byLane[lane] = bl;
            }
            bl.games++;
            bl.wins += p.win ? 1 : 0;
            counted++;
          }
        }
        if (counted) {
          resolved.push(label);
          regions.add(pl.platform);
        } else {
          failed.push(label);
        }
      } catch {
        failed.push(label);
      }
    });

    const champions = [...agg.values()].map((c) => ({
      championName: c.championName,
      games: c.games,
      wins: c.wins,
      winRate: c.games ? round1((c.wins / c.games) * 100) : 0,
      byLane: c.byLane,
    }));

    const batch = db.batch();
    for (const c of champions) {
      batch.set(db.collection("meta").doc(c.championName), {
        games: c.games,
        wins: c.wins,
        byLane: c.byLane,
      });
    }
    const info = {
      generatedAt: new Date().toISOString(),
      signature: META_SIGNATURE,
      championGames: champions.reduce((s, c) => s + c.games, 0),
      players: resolved.length,
      regions: [...regions].sort(),
      resolved,
      failed,
    };
    batch.set(db.collection("meta").doc("_meta"), info);
    await batch.commit();
    console.log(
      `Meta sampled: ${info.championGames} champion-games, ${info.players} players (${info.regions.join(", ")})`
    );
  } catch (err) {
    console.warn("Worldwide meta sampling failed:", err.message);
  } finally {
    samplingMeta = false;
  }
}

async function buildPlayerStats(name, tag) {
  const region = RIOT_REGION;
  const acctRes = await riotFetch(
    `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(name)}/${encodeURIComponent(tag)}`
  );
  if (!acctRes.data) {
    if (acctRes.status === 404) {
      throw Object.assign(new Error("Summoner not found. Check the name and tag and try again."), { kind: "not_found" });
    }
    throw Object.assign(new Error(apiError(acctRes.status).error), { kind: apiError(acctRes.status).kind });
  }
  const acct = acctRes.data;

  const puuid = acct.puuid;

  const summonerRes = await riotFetch(
    `https://${RIOT_PLATFORM}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`
  );
  const summoner = summonerRes.data;

  const idsRes = await riotFetch(
    `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=30`
  );
  if (!idsRes.data && idsRes.status === 403) {
    throw Object.assign(new Error(apiError(403).error), { kind: "api_key" });
  }
  const matchIds = Array.isArray(idsRes.data) ? idsRes.data : [];

  const details = await mapLimit(matchIds, 6, async (mid) => {
    const r = await riotFetch(`https://${region}.api.riotgames.com/lol/match/v5/matches/${mid}`);
    return r.data;
  });

  const recent = [];
  const champStats = new Map();
  let kills = 0,
    deaths = 0,
    assists = 0,
    wins = 0;

  for (const m of details) {
    if (!m || !m.info) continue;
    const p = m.info.participants.find((x) => x.puuid === puuid);
    if (!p) continue;

    const ch = p.championName;
    let st = champStats.get(ch);
    if (!st) {
      st = { championName: ch, games: 0, wins: 0, kills: 0, deaths: 0, assists: 0 };
      champStats.set(ch, st);
    }
    st.games++;
    st.wins += p.win ? 1 : 0;
    st.kills += p.kills;
    st.deaths += p.deaths;
    st.assists += p.assists;

    kills += p.kills;
    deaths += p.deaths;
    assists += p.assists;
    if (p.win) wins++;

    recent.push({
      matchId: m.metadata.matchId,
      championName: ch,
      win: p.win,
      kills: p.kills,
      deaths: p.deaths,
      assists: p.assists,
      lane: p.lane,
      role: p.role,
      queueId: m.info.queueId,
      duration: m.info.gameDuration,
      timestamp: m.info.gameEndTimestamp || 0,
    });
  }

  const topChampions = [...champStats.values()]
    .sort((a, b) => b.games - a.games || b.wins - a.wins)
    .map((c) => ({
      ...c,
      winRate: c.games ? round1((c.wins / c.games) * 100) : 0,
      kda: c.deaths ? round1((c.kills + c.assists) / c.deaths) : round1(c.kills + c.assists),
    }));

  const played = recent.length;

  const championNames = await getChampionNames();
  const ranked = await buildRanked(puuid);
  const mastery = await buildMastery(puuid, championNames);

  return {
    ddragonVersion: await getDdragonVersion(),
    account: {
      gameName: acct.gameName,
      tagLine: acct.tagLine,
      puuid,
      platform: RIOT_PLATFORM,
      summonerLevel: summoner?.summonerLevel ?? null,
      profileIconId: summoner?.profileIconId ?? null,
    },
    summary: {
      matchesPlayed: played,
      wins,
      losses: played - wins,
      winRate: played ? round1((wins / played) * 100) : 0,
      kda: deaths ? round1((kills + assists) / deaths) : round1(kills + assists),
      kills,
      deaths,
      assists,
    },
    ranked,
    mastery,
    topChampions,
    recent: recent.sort((a, b) => b.timestamp - a.timestamp),
  };
}

async function verifyTokenOrSend(res, token) {
  if (!token) {
    res.status(401).json({ error: "Not signed in" });
    return null;
  }
  try {
    return await admin.auth().verifyIdToken(token);
  } catch {
    res.status(401).json({ error: "Invalid session" });
    return null;
  }
}

const app = express();
app.use(express.json());

app.get("/api/config", (_req, res) => {
  res.json({
    firebaseConfigured: fbConfigured,
    riotConfigured: !!(RIOT_CLIENT_ID && RIOT_CLIENT_SECRET),
    riotApiConfigured: !!RIOT_API_KEY,
  });
});

app.get("/api/player", async (req, res) => {
  if (!RIOT_API_KEY) {
    return res
      .status(503)
      .json({ error: "Player stats need a Riot API key. Add RIOT_API_KEY to server/.env." });
  }

  const name = String(req.query.name || "").trim();
  const tag = String(req.query.tag || "").trim();
  if (!name || !tag) {
    return res.status(400).json({ error: "Provide both a player name and tag (e.g. name=Thebausffs&tag=EUW)." });
  }

  try {
    const data = await cached(`player:${name}#${tag}`, 5 * 60 * 1000, () => buildPlayerStats(name, tag));
    data.live = await buildLive(data.account.puuid, await getChampionNames());
    res.json(data);
  } catch (err) {
    const kind = err.kind || "generic";
    const status = kind === "not_found" ? 404 : 503;
    res.status(status).json({ error: err.message || "Could not load player stats.", kind });
  }
});

app.get("/api/meta", async (_req, res) => {
  if (!fbConfigured) {
    return res.status(503).json({
      error: "The Meta tier list needs Firebase/Firestore configured. It aggregates a worldwide high-ELO champion snapshot by lane.",
    });
  }
  try {
    const data = await cached("meta:list", 60 * 1000, async () => {
      const snap = await admin.firestore().collection("meta").get();
      const champions = [];
      let info = { generatedAt: null, championGames: 0, players: 0, regions: [] };
      snap.forEach((doc) => {
        const d = doc.data();
        if (doc.id === "_meta") {
          info = {
            generatedAt: d.generatedAt || null,
            championGames: d.championGames || 0,
            players: d.players || 0,
            regions: d.regions || [],
          };
          return;
        }
        if (!d.byLane) return;
        const byLane = {};
        for (const [lane, v] of Object.entries(d.byLane || {})) {
          byLane[lane] = {
            games: v.games || 0,
            wins: v.wins || 0,
            winRate: v.games ? Math.round((v.wins / v.games) * 1000) / 10 : 0,
          };
        }
        champions.push({
          championName: doc.id,
          games: d.games || 0,
          wins: d.wins || 0,
          winRate: d.games ? Math.round((d.wins / d.games) * 1000) / 10 : 0,
          byLane,
        });
      });
      champions.sort((a, b) => b.games - a.games);
      return { ...info, champions };
    });
    res.json(data);
  } catch (err) {
    console.error("Meta endpoint failed:", err);
    res.status(500).json({ error: "Could not load the meta tier list." });
  }
});

app.get("/api/riot/auth", async (req, res) => {
  const mode = req.query.mode === "link" ? "link" : "signin";

  if (!fbConfigured) {
    return res
      .status(503)
      .json({ error: "Firebase service account is not configured on the server." });
  }
  if (!RIOT_CLIENT_ID || !RIOT_CLIENT_SECRET) {
    return res
      .status(503)
      .json({ error: "Riot RSO credentials are not configured on the server." });
  }

  let uid = null;
  if (mode === "link") {
    const decoded = await verifyTokenOrSend(res, bearer(req));
    if (!decoded) return;
    uid = decoded.uid;
  }

  const state = randomState();
  STATES.set(state, { mode, uid, exp: Date.now() + STATE_TTL });

  const params = new URLSearchParams({
    client_id: RIOT_CLIENT_ID,
    redirect_uri: RIOT_REDIRECT_URI,
    response_type: "code",
    scope: "openid",
    state,
  });
  if (mode === "signin") params.set("prompt", "login");

  res.json({ url: `${RIOT_AUTH_URL}?${params.toString()}` });
});

app.get("/api/riot/callback", async (req, res) => {
  const { code, state } = req.query;
  const entry = state ? STATES.get(state) : null;
  if (!entry || !code) {
    return res
      .status(400)
      .send("<h1>Invalid or expired authorization link.</h1><p>Please try again from the site.</p>");
  }
  STATES.delete(state);

  try {
    const tok = await exchangeCode(code);
    const acct = await getAccount(tok.access_token);
    const riot = {
      puuid: acct.puuid,
      gameName: acct.gameName || "",
      tagLine: acct.tagLine || "",
      summonerId: "",
      linkedAt: new Date().toISOString(),
    };

    if (entry.mode === "link" && entry.uid) {
      await admin.firestore().collection("users").doc(entry.uid).set({ riot }, { merge: true });
      return res.redirect("/?riot=linked");
    }

    await admin
      .firestore()
      .collection("users")
      .doc(riot.puuid)
      .set({ provider: "riot", riot }, { merge: true });
    const customToken = await admin.auth().createCustomToken(riot.puuid);
    return res.redirect(`/?riotToken=${encodeURIComponent(customToken)}`);
  } catch (err) {
    console.error("RSO callback failed:", err);
    return res
      .status(500)
      .send("<h1>Failed to connect your League of Legends account.</h1><p>Please try again.</p>");
  }
});

app.get("/api/riot/status", async (req, res) => {
  if (!fbConfigured) return res.status(503).json({ error: "Not configured" });
  const decoded = await verifyTokenOrSend(res, bearer(req));
  if (!decoded) return;

  const doc = await admin.firestore().collection("users").doc(decoded.uid).get();
  const riot = doc.exists ? doc.data().riot : null;
  if (riot && riot.gameName) {
    res.json({ linked: true, account: riot });
  } else {
    res.json({ linked: false });
  }
});

app.post("/api/riot/unlink", async (req, res) => {
  if (!fbConfigured) return res.status(503).json({ error: "Not configured" });
  const decoded = await verifyTokenOrSend(res, bearer(req));
  if (!decoded) return;

  await admin
    .firestore()
    .collection("users")
    .doc(decoded.uid)
    .set({ riot: admin.firestore.FieldValue.delete() }, { merge: true });
  res.json({ ok: true });
});

// ----- User profile settings (Riot ID + background theme) -----

const BG_THEMES = ["void", "crimson", "emerald", "aurora", "gold"];

app.get("/api/profile", async (req, res) => {
  if (!fbConfigured) {
    return res.status(503).json({ error: "Profiles need Firebase to be configured on the server." });
  }
  const decoded = await verifyTokenOrSend(res, bearer(req));
  if (!decoded) return;

  const doc = await admin.firestore().collection("users").doc(decoded.uid).get();
  const data = doc.exists ? doc.data() : {};
  const prof = data.profile || {};
  res.json({
    profile: {
      name: typeof prof.name === "string" ? prof.name : "",
      tag: typeof prof.tag === "string" ? prof.tag : "",
      background: BG_THEMES.includes(prof.background) ? prof.background : "void",
      champion: typeof prof.champion === "string" ? prof.champion : "",
    },
    linked: data.riot && data.riot.gameName ? data.riot : null,
  });
});

app.post("/api/profile", async (req, res) => {
  if (!fbConfigured) {
    return res.status(503).json({ error: "Profiles need Firebase to be configured on the server." });
  }
  const decoded = await verifyTokenOrSend(res, bearer(req));
  if (!decoded) return;

  const body = req.body || {};
  const name = String(body.name ?? "").trim().slice(0, 32);
  const tag = String(body.tag ?? "").trim().toUpperCase().slice(0, 8);
  const background = BG_THEMES.includes(body.background) ? body.background : "void";
  const champion = typeof body.champion === "string" ? body.champion.trim().slice(0, 32) : "";

  await admin
    .firestore()
    .collection("users")
    .doc(decoded.uid)
    .set({ profile: { name, tag, background, champion } }, { merge: true });

  res.json({ ok: true, profile: { name, tag, background, champion } });
});

const STATIC_OK = new Set([
  "/",
  "/index.html",
  "/player.html",
  "/style.css",
  "/app.js",
  "/data.js",
  "/auth.js",
  "/player.js",
  "/stats-view.js",
  "/profile.js",
  "/bg.js",
  "/profile.html",
  "/firebase-config.js",
  "/meta.html",
  "/meta.js",
]);

app.use((req, res, next) => {
  if (req.method !== "GET") return next();
  if (STATIC_OK.has(req.path) || req.path.startsWith("/icons/")) {
    return express.static(ROOT)(req, res, next);
  }
  next();
});

app.use((req, res) => {
  if (req.path.startsWith("/api/")) {
    res.status(404).json({ error: "Not found" });
  } else {
    res.status(404).type("html").send("<h1>404 Not found</h1>");
  }
});

app.listen(PORT, () => {
  console.log(`LoL guide running at http://localhost:${PORT}`);
  console.log(`Firebase admin: ${fbConfigured ? "configured" : "NOT configured (add server/.env)"}`);
  console.log(
    `Riot RSO: ${RIOT_CLIENT_ID && RIOT_CLIENT_SECRET ? "configured" : "NOT configured (add server/.env)"}`
  );
  console.log(
    `Riot API key: ${RIOT_API_KEY ? "configured" : "NOT configured (player stats disabled; add server/.env)"}`
  );

  sampleWorldwideMeta();
  setInterval(sampleWorldwideMeta, META_REFRESH_MS);
});
