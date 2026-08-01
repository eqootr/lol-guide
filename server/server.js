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

async function riotFetch(url) {
  const res = await fetch(url, { headers: { "X-Riot-Token": RIOT_API_KEY } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Riot API error ${res.status}`);
  return res.json();
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

async function buildPlayerStats(name, tag) {
  const region = RIOT_REGION;
  const acct = await riotFetch(
    `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(name)}/${encodeURIComponent(tag)}`
  );
  if (!acct) throw new Error("Summoner not found. Check the name and tag and try again.");

  const puuid = acct.puuid;

  const summoner = await riotFetch(
    `https://${RIOT_PLATFORM}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`
  );
  const ids = await riotFetch(
    `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=30`
  );
  const matchIds = Array.isArray(ids) ? ids : [];

  const details = await mapLimit(matchIds, 6, async (mid) => {
    try {
      return await riotFetch(`https://${region}.api.riotgames.com/lol/match/v5/matches/${mid}`);
    } catch {
      return null;
    }
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
  return {
    ddragonVersion: await getDdragonVersion(),
    account: {
      gameName: acct.gameName,
      tagLine: acct.tagLine,
      puuid,
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
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message || "Could not load player stats." });
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

const STATIC_OK = new Set([
  "/",
  "/index.html",
  "/player.html",
  "/style.css",
  "/app.js",
  "/data.js",
  "/auth.js",
  "/player.js",
  "/firebase-config.js",
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
});
