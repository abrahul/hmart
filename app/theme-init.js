(() => {
  const themes = ["editorial", "tropical", "industrial", "gallery", "atelier", "future"];
  const requested = new URLSearchParams(window.location.search).get("theme");
  let saved = null;
  try { saved = window.localStorage.getItem("hmart-preview-theme"); } catch (_) { /* storage can be unavailable */ }
  const theme = themes.includes(requested) ? requested : themes.includes(saved) ? saved : "industrial";
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme === "industrial" || theme === "gallery" ? "dark" : "light";
  window.HMART_THEME = { themes, theme };
})();
