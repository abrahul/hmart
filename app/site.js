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
      <a href="./services.html?material=${encodeURIComponent(name)}#enquire" aria-label="Enquire about ${name}">Add to enquiry</a>
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
