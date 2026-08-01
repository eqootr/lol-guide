const grid = document.getElementById("grid");
const detail = document.getElementById("detail");
const detailCard = document.getElementById("detailCard");
const backBtn = document.getElementById("backBtn");
const search = document.getElementById("search");
const filters = document.querySelectorAll(".filter");

let activeRole = "all";
let searchTerm = "";

function diffLabel(d) {
  return d <= 2 ? "Beginner friendly" : d <= 5 ? "Easy" : d <= 8 ? "Moderate" : "Hard";
}

const iconFor = new Map(CHAMPIONS.map((c) => [c.name, c.id]));
const tierColor = (t) =>
  t === "S+" ? "var(--gold)" : t === "S" ? "#cd7f32" : t === "A" ? "#3ddc84" : t === "B" ? "var(--accent)" : "var(--muted)";

function itemIcon(id, name, pct) {
  return `
    <span class="ic">
      <img src="icons/items/${id}.png" alt="${name}" title="${name}">
      ${pct ? `<span class="pct">${pct}%</span>` : ""}
    </span>`;
}

function runeIcon(id, name, cls) {
  return `<img class="rune ${cls}" src="icons/runes/${id}.png" alt="${name}" title="${name}">`;
}

function spellIcon(id, name) {
  return `<img class="spell" src="icons/spells/${id}.png" alt="${name}" title="${name}">`;
}

function counterIcon(name) {
  const id = iconFor.get(name);
  return id ? `<img class="c-avatar" src="icons/${id}.png" alt="${name}">` : `<span class="c-avatar">${(name || "?").slice(0, 1)}</span>`;
}

function renderBuild(champ) {
  const b = champ.build;
  if (!b) return `<h3 class="section-title">Best Build</h3><div class="tip">No build data available yet.</div>`;

  const slotHtml = b.itemSlots
    .map(
      (s) => `
      <div class="build-block">
        <h4>${s.label}</h4>
        <div class="icon-row">${s.options.map((o) => itemIcon(o.id, o.name, o.pct)).join("")}</div>
      </div>`
    )
    .join("");

  const skillHtml = b.skillOrder
    ? `<div class="skill-order">${b.skillOrder.map((s) => `<span class="sk">${s.key}<b>${s.levels}</b></span>`).join("")}</div>`
    : "";

  return `
    <h3 class="section-title">
      Best Build
      <span class="meta">
        ${b.role} &bull;
        <span style="color:${tierColor(b.tier)};font-weight:700;">Tier ${b.tier || "?"}</span> &bull;
        ${b.winPrc != null ? `${b.winPrc}% win rate` : ""}
        ${b.pickRate != null ? `&bull; ${Math.round(b.pickRate * 10) / 10}% pick` : ""}
        ${b.games ? `&bull; ${b.games} games` : ""}
      </span>
    </h3>
    <div class="build-grid">
      <div class="build-block">
        <h4>Summoner Spells</h4>
        <div class="icon-row">${b.summonerSpells.map((s) => spellIcon(s.id, s.name)).join("")}</div>
      </div>
      <div class="build-block">
        <h4>Starting Items</h4>
        <div class="icon-row">${b.startingItems.map((i) => itemIcon(i.id, i.name)).join("")}</div>
      </div>
      <div class="build-block">
        <h4>Core Items</h4>
        <div class="icon-row">${b.coreItems.map((i) => itemIcon(i.id, i.name)).join("")}</div>
      </div>
      ${slotHtml}
      ${skillHtml ? `<div class="build-block"><h4>Skill Order</h4>${skillHtml}</div>` : ""}
    </div>`;
}

function renderRunes(champ) {
  const r = champ.build?.runes;
  if (!r) return "";
  const p = r.primary;
  const s = r.secondary;
  const shardRow = r.statShards
    ? `<div class="rune-row shards">${r.statShards.map((x) => runeIcon(x.id, x.name)).join("")}</div>`
    : "";

  return `
    <h3 class="section-title">Runes</h3>
    <div class="runes">
      <div class="rune-col">
        <div class="rune-tree">${p.tree || "Primary"}</div>
        <div class="rune-row">
          ${p.keystone ? runeIcon(p.keystone.id, p.keystone.name, "keystone") : ""}
        </div>
        <div class="rune-row">${p.minors.map((m) => runeIcon(m.id, m.name)).join("")}</div>
      </div>
      <div class="rune-col">
        <div class="rune-tree">${s.tree || "Secondary"}</div>
        <div class="rune-row sub">${s.minors.map((m) => runeIcon(m.id, m.name)).join("")}</div>
      </div>
      <div class="rune-col shard-col">
        <div class="rune-tree">Stat Shards</div>
        ${shardRow}
      </div>
    </div>`;
}

function renderCounters(champ) {
  const c = champ.counters;
  if (!c || (!c.weak.length && !c.strong.length)) return "";
  const fmt = (m) => `
    <div class="counter" title="${m.games} games">
      ${counterIcon(m.name)}
      <span class="c-name">${m.name}</span>
      <span class="c-wr" style="color:${m.winPrc < 50 ? "#e06b6b" : "#3ddc84"}">${m.winPrc}%</span>
    </div>`;

  const col = (h, list) => list.length ? `
      <div class="counters-col">
        <h4>${h}</h4>
        ${list.map(fmt).join("")}
      </div>` : "";

  return `
    <h3 class="section-title">Counters <span class="meta">your win rate against them</span></h3>
    <div class="counters">
      ${col("Weak against", c.weak)}
      ${col("Strong against", c.strong)}
    </div>`;
}

function filtered() {
  return CHAMPIONS.filter((c) => {
    const roleOk = activeRole === "all" || c.roles.includes(activeRole);
    const nameOk = c.name.toLowerCase().includes(searchTerm) ||
      c.title.toLowerCase().includes(searchTerm);
    return roleOk && nameOk;
  });
}

function renderGrid() {
  const list = filtered();
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = '<p class="no-results">No champions found.</p>';
    return;
  }

  for (const [i, champ] of list.entries()) {
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${Math.min(i * 30, 450)}ms`;
    card.innerHTML = `
      <div class="avatar"><img src="icons/${champ.id}.png" alt="${champ.name}"></div>
      <h3>${champ.name}</h3>
      <span class="role-tag">${champ.roles.join(" / ")}</span>
      <span class="diff">${diffLabel(champ.difficulty)}</span>
    `;
    card.addEventListener("click", () => showDetail(champ));
    grid.appendChild(card);
  }
}

function dmgPills(dmg) {
  if (!dmg) return "";
  if (Array.isArray(dmg)) return dmg.map((t) => `<span class="stat stat-dmg">${t}</span>`).join("");
  return `<span class="stat stat-dmg">${dmg}</span>`;
}

function showDetail(champ) {
  detail.classList.remove("hidden");
  grid.style.display = "none";

  const abilities = champ.abilities
    .map((a) => {
      const stats = [
        dmgPills(a.dmg),
        a.cost ? `<span class="stat stat-cost">${a.cost}</span>` : "",
        a.cd ? `<span class="stat stat-cd">${a.cd}</span>` : "",
      ].join("");
      return `
      <div class="ability">
        <span class="key">${a.key}</span><span class="name">${a.name}</span>
        <p>${a.text}</p>
        ${stats ? `<div class="ability-stats">${stats}</div>` : ""}
      </div>
    `;
    })
    .join("");

  detailCard.innerHTML = `
    <div class="detail-card">
      <div class="detail-header">
        <div class="avatar"><img src="icons/${champ.id}.png" alt="${champ.name}"></div>
        <div>
          <h2>${champ.name}</h2>
          <div class="title">${champ.title}</div>
          <div class="tags">
            <span class="tag-role">${champ.roles.join(" / ")}</span>
            <span class="tag-diff">${diffLabel(champ.difficulty)}</span>
          </div>
        </div>
      </div>
      <div class="detail-body">
        <div class="tip" style="margin-bottom:0.5rem;">${champ.blurb}</div>

        <h3 class="section-title">Passive</h3>
        <div class="passive">
          <span class="name">${champ.passive.name}</span>
          <p>${champ.passive.text}</p>
          ${champ.passive.dmg ? `<div class="ability-stats">${dmgPills(champ.passive.dmg)}</div>` : ""}
        </div>

        <h3 class="section-title">Abilities</h3>
        ${abilities}

        ${renderBuild(champ)}

        ${renderRunes(champ)}

        ${renderCounters(champ)}
      </div>
    </div>
  `;

  detail.scrollIntoView({ behavior: "smooth", block: "start" });
}

backBtn.addEventListener("click", () => {
  detail.classList.add("hidden");
  grid.style.display = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
});

search.addEventListener("input", () => {
  searchTerm = search.value.trim().toLowerCase();
  renderGrid();
});

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeRole = btn.dataset.role;
    renderGrid();
  });
});

renderGrid();
