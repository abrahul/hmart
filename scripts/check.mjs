import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const required = ["index.html", "materials.html", "services.html", "app/globals.css", "app/site.js", "app/theme-init.js", "assets/hmart-logo-premium.svg", "assets/hmart-logo-original.png", "vercel.json"];
await Promise.all(required.map((file) => access(resolve(root, file))));
const [home, materialsPage, servicesPage, css, js, themeInit, vercelConfig] = await Promise.all([
  readFile(resolve(root, "index.html"), "utf8"),
  readFile(resolve(root, "materials.html"), "utf8"),
  readFile(resolve(root, "services.html"), "utf8"),
  readFile(resolve(root, "app/globals.css"), "utf8"),
  readFile(resolve(root, "app/site.js"), "utf8"),
  readFile(resolve(root, "app/theme-init.js"), "utf8"),
  readFile(resolve(root, "vercel.json"), "utf8")
]);
const html = [home, materialsPage, servicesPage].join("\n");
const vercel = JSON.parse(vercelConfig);
const checks = [
  [html.includes("+91 79944 40164"), "phone number"], [html.includes("hmartbuildingsolutions@gmail.com"), "email"],
  [html.includes("Thonnakkal"), "address"], [html.includes("Kooraveettil Agencies"), "sister concerns"],
  [html.includes("Illustrative stock photography"), "stock label"], [js.includes("wa.me/917994440164?text="), "WhatsApp form"],
  [html.includes('aria-label="Main navigation"'), "navigation label"], [html.includes('type="application/ld+json"'), "structured data"],
  [["editorial", "tropical", "industrial", "gallery", "atelier", "future"].every((theme) => css.includes(`[data-theme=${theme}]`)), "six theme visual systems"],
  [[home, materialsPage, servicesPage].every((page) => page.includes('src="./theme-init.js"')), "early theme initialisation"],
  [js.includes("themeDefinitions") && js.includes("theme-preview") && js.includes("data-theme-choice"), "theme preview picker"],
  [themeInit.includes('URLSearchParams(window.location.search).get("theme")') && themeInit.includes("hmart-preview-theme"), "URL and saved theme precedence"],
  [js.includes("updateInternalLinks") && js.includes('searchParams.set("theme"'), "theme-preserving internal links"],
  [css.includes("prefers-reduced-motion"), "reduced motion support"],
  [html.includes("Site inspection & consultation"), "site inspection service"], [html.includes("Waterproofing"), "waterproofing service"],
  [html.includes('src="./assets/hmart-logo-original.png"') && html.includes("brand-logo-official"), "exact official logo asset"],
  [home.includes("materials.html") && materialsPage.includes("services.html") && servicesPage.includes("index.html"), "three-page navigation"],
  [js.includes("services.html?material=") && js.includes('params.get("material")'), "cross-page material enquiry"],
  [vercel.outputDirectory === "dist", "Vercel output directory"]
];
const failed = checks.filter(([ok]) => !ok);
if (failed.length) { console.error(`Checks failed: ${failed.map(([, name]) => name).join(", ")}`); process.exit(1); }
console.log(`Validated ${checks.length} content and accessibility requirements.`);
