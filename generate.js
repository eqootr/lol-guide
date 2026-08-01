const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const ICONS_DIR = path.join(ROOT, "icons");
const OUT = path.join(ROOT, "data.js");
const CDN = "https://ddragon.leagueoflegends.com";

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
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
}

async function run() {
  const versions = await getJSON(`${CDN}/api/versions.json`);
  const version = versions[0];
  console.log("Using version", version);

  const list = await getJSON(
    `${CDN}/cdn/${version}/data/en_US/champion.json`
  );
  const ids = Object.keys(list.data).sort();
  console.log(`Found ${ids.length} champions`);

  fs.mkdirSync(ICONS_DIR, { recursive: true });
  for (const f of fs.readdirSync(ICONS_DIR)) {
    fs.unlinkSync(path.join(ICONS_DIR, f));
  }

  const mainIds = ids.filter((id) => !id.startsWith("Jade_"));
  console.log(`Skipping ${ids.length - mainIds.length} Jade variant reskins`);

  const result = [];
  let done = 0;

  const queue = mainIds.map(async (id) => {
    const detail = await getJSON(
      `${CDN}/cdn/${version}/data/en_US/champion/${id}.json`
    );
    const c = detail.data[id];

    const passive = {
      name: clean(c.passive.name),
      text: clean(c.passive.description),
    };

    const spellKeys = ["Q", "W", "E", "R"];
    const abilities = c.spells
      .slice(0, 4)
      .map((s, i) => ({
        key: spellKeys[i],
        name: clean(s.name),
        text: clean(s.description),
      }));

    result.push({
      id: c.id,
      name: c.name,
      title: clean(c.title),
      roles: c.tags,
      difficulty: c.info.difficulty,
      blurb: clean(c.blurb),
      passive,
      abilities,
    });

    const iconUrl = `${CDN}/cdn/${version}/img/champion/${c.id}.png`;
    await download(iconUrl, path.join(ICONS_DIR, `${c.id}.png`));

    done++;
    if (done % 25 === 0 || done === ids.length) {
      console.log(`Progress: ${done}/${ids.length}`);
    }
  });

  await Promise.all(queue);

  result.sort((a, b) => a.name.localeCompare(b.name));

  fs.writeFileSync(
    OUT,
    "const CHAMPIONS = " + JSON.stringify(result, null, 2) + ";\n",
    "utf8"
  );
  console.log(`Wrote data.js with ${result.length} champions.`);
}

run().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
