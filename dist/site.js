const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-nav");

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.classList.remove("active");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("open");
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.classList.toggle("active", !open);
    menuButton.setAttribute("aria-expanded", String(!open));
    menuButton.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("open", !open);
  });
  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
  document.addEventListener("pointerdown", (event) => {
    if (navigation.classList.contains("open") && !navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
}

const setHeaderState = () => header?.classList.toggle("scrolled", window.scrollY > 18);
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const filterButtons = [...document.querySelectorAll("[data-filter]")];
const productCards = [...document.querySelectorAll("[data-product-grid] [data-category]")];
if (filterButtons.length && productCards.length) {
  filterButtons.forEach((button) => button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    productCards.forEach((card) => { card.hidden = filter !== "All" && card.dataset.category !== filter; });
  }));
}

const params = new URLSearchParams(window.location.search);
const enquiryForm = document.querySelector("[data-enquiry-form]");
const messageDialog = document.querySelector("[data-message-dialog]");
const messagePreview = document.querySelector("[data-message-preview]");
const whatsappLink = document.querySelector("[data-whatsapp-link]");
const copyButton = document.querySelector("[data-copy-message]");
const copyStatus = document.querySelector("[data-copy-status]");

function updateWhatsAppLink() {
  if (!messagePreview || !whatsappLink) return;
  whatsappLink.href = `https://wa.me/917994440164?text=${encodeURIComponent(messagePreview.value)}`;
}

if (enquiryForm) {
  const selectedProduct = params.get("product");
  const selectedService = params.get("service");
  if (selectedProduct) {
    enquiryForm.elements.service.value = "Material supply";
    enquiryForm.elements.details.value = `Material of interest: ${selectedProduct}\n\n`;
  }
  if (selectedService && [...enquiryForm.elements.service.options].some((option) => option.value === selectedService)) {
    enquiryForm.elements.service.value = selectedService;
  }

  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(enquiryForm);
    const message = [
      "Hello HMART Building Solutions,",
      "",
      `Name: ${String(data.get("name")).trim()}`,
      `Required service: ${String(data.get("service")).trim()}`,
      `Project location: ${String(data.get("location")).trim()}`,
      `Project details: ${String(data.get("details")).trim()}`
    ].join("\n");
    messagePreview.value = message;
    updateWhatsAppLink();
    enquiryForm.querySelector("[data-form-status]").textContent = "WhatsApp message prepared for review.";
    if (typeof messageDialog.showModal === "function") messageDialog.showModal();
    else messageDialog.setAttribute("open", "");
  });
}

messagePreview?.addEventListener("input", updateWhatsAppLink);
copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(messagePreview.value);
    copyStatus.textContent = "Message copied to clipboard.";
  } catch {
    messagePreview.select();
    copyStatus.textContent = "Select and copy the highlighted message.";
  }
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .1 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
}

document.querySelectorAll("[data-year]").forEach((element) => { element.textContent = new Date().getFullYear(); });
