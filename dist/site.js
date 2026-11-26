const materials = [
  ["Shingles", "Roofing", "Layered roofing for homes, villas, resorts and commercial buildings."],
  ["Stone-coated roofing", "Roofing", "Metal roofing with the appearance and texture of traditional roof tiles."],
  ["Tile profile sheets", "Roofing", "Sheet roofing formed to express a traditional tile profile."],
  ["PUF roofing panels", "Roofing", "Insulated panel systems used across industrial and commercial applications."],
  ["UPVC roofing sheets", "Roofing", "A modern roofing option used across residential, commercial and agricultural buildings."],
  ["Trafford profile sheets", "Roofing", "Profiled metal and aluminium roofing for varied building requirements."],
  ["GI roofing sheets", "Roofing", "Galvanised iron sheet options for roofing applications."],
  ["Polycarbonate sheets", "Roofing", "Translucent sheet options for daylight-oriented roofing applications."],
  ["Cladding sheets", "Cladding & Panels", "Profiled exterior and interior wall covering solutions."],
  ["Decking sheets", "Cladding & Panels", "Steel deck sheets used as structural bases in floor and roof systems."],
  ["Cement panels", "Cladding & Panels", "Panel solutions for walls, ceilings, partitions, facades and floors."],
  ["Cement boards", "Cladding & Panels", "Boards used across wall, ceiling, partition and exterior applications."],
  ["AAC blocks", "Construction", "Autoclaved aerated concrete blocks for modern masonry work."],
  ["Hollow bricks", "Construction", "Hollow masonry units for walls, partitions and building applications."],
  ["Country bricks", "Construction", "Traditional clay bricks for residential and commercial masonry."],
  ["TMT bars", "Construction", "Reinforcement steel for structural construction requirements."],
  ["Construction aggregates", "Construction", "Sand and aggregate materials for concrete, plastering and masonry."],
  ["Cement", "Construction", "Core cement products for general building and infrastructure work."],
  ["Casuarina poles", "Construction", "Poles used for scaffolding, fencing and temporary support applications."]
];

const params = new URLSearchParams(window.location.search);
const themeDefinitions = {
  editorial: { name: "Architectural Editorial", description: "Asymmetric, warm and magazine-led.", colors: ["#f4f0e8", "#171715", "#a9633b"], meta: "#171715" },
  tropical: { name: "Tropical Modern", description: "Kerala light, limestone and greenery.", colors: ["#eee8dc", "#61705a", "#b75e42"], meta: "#485448" },
  industrial: { name: "Industrial Precision", description: "Application-led, high-impact material catalogue.", colors: ["#171d1c", "#f4f3ee", "#ff5a2a"], meta: "#171d1c" },
  gallery: { name: "Gallery Minimal", description: "Monochrome, immersive and deliberately sparse.", colors: ["#f5f5f2", "#111111", "#9faaa3"], meta: "#111111" },
  atelier: { name: "Material Atelier", description: "Tactile clay, stone and curated layers.", colors: ["#e9dfd1", "#8b4f3d", "#6f7770"], meta: "#6b493d" },
  future: { name: "Future Form", description: "Cobalt modules and dynamic geometry.", colors: ["#f8fbff", "#1447e6", "#081a3a"], meta: "#1447e6" }
};
let currentTheme = window.HMART_THEME?.theme || "industrial";

function themeHref(rawHref) {
  const url = new URL(rawHref, window.location.href);
  url.searchParams.set("theme", currentTheme);
  const file = url.pathname.split("/").pop() || "index.html";
  return `./${file}${url.search}${url.hash}`;
}

function updateInternalLinks() {
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) return;
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin || (!url.pathname.endsWith(".html") && !url.pathname.endsWith("/"))) return;
    link.setAttribute("href", themeHref(href));
  });
}

function setTheme(theme, { updateUrl = true } = {}) {
  if (!themeDefinitions[theme]) return;
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme === "industrial" || theme === "gallery" ? "dark" : "light";
  try { window.localStorage.setItem("hmart-preview-theme", theme); } catch (_) { /* storage can be unavailable */ }
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("theme", theme);
    window.history.replaceState({}, "", url);
  }
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeDefinitions[theme].meta);
  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    const active = button.dataset.themeChoice === theme;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const currentName = document.querySelector("[data-theme-current]");
  if (currentName) currentName.textContent = themeDefinitions[theme].name;
  const status = document.querySelector("[data-theme-status]");
  if (status) status.textContent = `${themeDefinitions[theme].name} applied.`;
  updateInternalLinks();
}

function mountThemePreview() {
  const preview = document.createElement("aside");
  preview.className = "theme-preview";
  preview.dataset.previewControl = "theme-picker";
  preview.innerHTML = `
    <button class="theme-preview-toggle" type="button" aria-expanded="false" aria-controls="theme-preview-panel" aria-haspopup="dialog">
      <span>Client design preview</span><strong data-theme-current>${themeDefinitions[currentTheme].name}</strong>
    </button>
    <div class="theme-preview-panel" id="theme-preview-panel" role="dialog" aria-label="Choose a visual direction" hidden>
      <div class="theme-preview-head"><div><span>HMART / Design preview</span><h2>Choose a direction</h2></div><button class="theme-preview-close" type="button" aria-label="Close theme picker">Close</button></div>
      <div class="theme-options">${Object.entries(themeDefinitions).map(([key, theme], index) => `
        <button type="button" class="theme-option" data-theme-choice="${key}" aria-pressed="false">
          <span class="theme-index">0${index + 1}</span>
          <span class="theme-option-copy"><strong>${theme.name}</strong><small>${theme.description}</small></span>
          <span class="theme-swatches" aria-hidden="true">${theme.colors.map((color) => `<i style="background:${color}"></i>`).join("")}</span>
        </button>`).join("")}</div>
      <div class="theme-preview-foot"><button type="button" data-theme-reset>Return to current baseline</button></div>
      <p class="sr-status" data-theme-status role="status"></p>
    </div>`;
  const siteHeader = document.querySelector(".site-header");
  if (siteHeader) siteHeader.before(preview);
  else document.body.prepend(preview);

  const toggle = preview.querySelector(".theme-preview-toggle");
  const panel = preview.querySelector(".theme-preview-panel");
  const close = preview.querySelector(".theme-preview-close");
  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
    preview.classList.toggle("open", open);
    if (open) close.focus();
  };
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  close.addEventListener("click", () => { setOpen(false); toggle.focus(); });
  preview.querySelectorAll("[data-theme-choice]").forEach((button) => button.addEventListener("click", () => {
    setTheme(button.dataset.themeChoice);
    setOpen(false);
    toggle.focus();
  }));
  preview.querySelector("[data-theme-reset]").addEventListener("click", () => setTheme("industrial"));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && preview.classList.contains("open")) { setOpen(false); toggle.focus(); }
  });
  document.addEventListener("pointerdown", (event) => {
    if (preview.classList.contains("open") && !preview.contains(event.target)) setOpen(false);
  });
  setTheme(currentTheme, { updateUrl: false });
}

mountThemePreview();

const grid = document.querySelector(".material-grid");
const filterButtons = [...document.querySelectorAll(".filter-bar button")];

function renderMaterials(filter = "All") {
  if (!grid) return;
  const visible = materials.filter(([, category]) => filter === "All" || category === filter);
  grid.innerHTML = visible.map(([name, category, note], index) => `
    <article class="material-card" style="--delay:${index * 35}ms">
      <span class="material-type">${category}</span>
      <h3>${name}</h3>
      <p>${note}</p>
      <a href="${themeHref(`./services.html?material=${encodeURIComponent(name)}#enquire`)}" aria-label="Enquire about ${name}">Add to enquiry</a>
    </article>
  `).join("");
}

if (grid) {
  const requestedFilter = params.get("filter");
  const initialFilter = filterButtons.some((button) => button.dataset.filter === requestedFilter) ? requestedFilter : "All";
  filterButtons.forEach((button) => {
    const active = button.dataset.filter === initialFilter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      renderMaterials(button.dataset.filter);
      const url = new URL(window.location.href);
      url.searchParams.set("filter", button.dataset.filter);
      url.searchParams.set("theme", currentTheme);
      window.history.replaceState({}, "", url);
    });
  });
  renderMaterials(initialFilter);
}

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

function closeMenu() {
  if (!menuButton || !nav) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  menuButton.classList.remove("active");
  nav.classList.remove("open");
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    menuButton.classList.toggle("active", !isOpen);
    nav.classList.toggle("open", !isOpen);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
}

const enquiryForm = document.querySelector(".enquiry-form");
if (enquiryForm) {
  const selectedMaterial = params.get("material");
  if (selectedMaterial) {
    enquiryForm.elements.service.value = "Material supply";
    enquiryForm.elements.details.value = `I would like to enquire about ${selectedMaterial}. `;
  }
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello HMART Building Solutions,",
      "",
      `Name: ${String(data.get("name")).trim()}`,
      `Required service: ${String(data.get("service")).trim()}`,
      `Project location: ${String(data.get("location")).trim()}`,
      `Project details: ${String(data.get("details")).trim()}`
    ].join("\n");
    event.currentTarget.querySelector(".sr-status").textContent = "Your WhatsApp enquiry is ready in a new window.";
    window.open(`https://wa.me/917994440164?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.querySelectorAll(".year").forEach((element) => { element.textContent = new Date().getFullYear(); });
updateInternalLinks();
