(function () {
  "use strict";

  const input = document.getElementById("playerSearch");
  const goBtn = document.getElementById("playerGo");
  const loading = document.getElementById("playerLoading");
  const errorBox = document.getElementById("playerError");
  const results = document.getElementById("playerResults");

  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[c]);
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
      LONStats.render(results, data);
      results.classList.remove("hidden");
      loading.classList.add("hidden");
      results.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      showError(err.message || "Could not load player stats.", err.kind);
    } finally {
      setBusy(false);
    }
  }

  goBtn.addEventListener("click", search);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") search();
  });
})();
