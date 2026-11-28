import { access, readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";

await import("./render.mjs");

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
const routes = ["", "roofing-materials", "construction-materials", "services", "contact-us", "about-us", "blog"];
const pageFiles = routes.map((route) => resolve(dist, route, "index.html"));
const required = [...pageFiles, resolve(dist, "styles.css"), resolve(dist, "site.js"), resolve(dist, "sitemap.xml"), resolve(dist, "robots.txt"), resolve(root, "content-audit.md")];
await Promise.all(required.map((file) => access(file)));

const pages = await Promise.all(pageFiles.map((file) => readFile(file, "utf8")));
const html = pages.join("\n");
const css = await readFile(resolve(dist, "styles.css"), "utf8");
const js = await readFile(resolve(dist, "site.js"), "utf8");
const sitemap = await readFile(resolve(dist, "sitemap.xml"), "utf8");
const audit = await readFile(resolve(root, "content-audit.md"), "utf8");
const productAssets = await readdir(resolve(dist, "assets", "products"));
const validRoutePaths = new Set(routes.map((route) => route ? `/${route}` : "/"));
const internalHrefs = [...html.matchAll(/href="(\/[^"]*)"/g)].map((match) => match[1]);
const invalidInternalLinks = internalHrefs.filter((href) => {
  const pathname = new URL(href, "https://www.hmartbs.com").pathname.replace(/\/$/, "") || "/";
  return !validRoutePaths.has(pathname) && pathname !== "/assets/hmart-logo-original.png" && pathname !== "/styles.css";
});

const checks = [
  [routes.every((route) => sitemap.includes(`https://www.hmartbs.com${route ? `/${route}` : "/"}`)), "seven sitemap routes"],
  [pages.every((page) => page.includes('aria-label="Main navigation"')), "accessible navigation on every page"],
  [pages.every((page) => page.includes('src="/assets/hmart-logo-source.png"')), "exact source logo on every page"],
  [pages.every((page) => page.includes('<meta name="description"')), "page descriptions"],
  [pages.every((page) => page.includes('type="application/ld+json"')), "structured data"],
  [html.includes("+91 79944 40164") && html.includes("hmartbuildingsolutions@gmail.com"), "verified contact details"],
  [html.includes("Mangalapuram, Thonnakkal, Thiruvananthapuram, Kerala 695317"), "normalised address"],
  [html.includes("Kooraveettil Agencies") && html.includes("Kooraveettil Builders") && html.includes("Kooraveettil Paints"), "sister concerns"],
  [html.includes("No articles published yet") && html.includes("no invented posts"), "honest blog empty state"],
  [html.includes("Roofing Shingles") && html.includes("Cement Boards") && html.includes("GI Roofing Sheets") && html.includes("Polycarbonate Roofing Sheets"), "roofing range"],
  [html.includes("Hollow Bricks") && html.includes("AAC Bricks") && html.includes("Casuarina Poles") && html.includes("Construction Aggregates &amp; Sand"), "construction range"],
  [html.includes("Planning & Documentation") && html.includes("Waterproofing") && html.includes("Site inspection"), "service range"],
  [productAssets.length >= 17, "migrated source product images"],
  [html.includes("Illustrative stock photography") && html.includes("Source-site product image"), "image provenance labels"],
  [js.includes("data-filter") && js.includes("card.hidden"), "working material filters"],
  [js.includes("Material of interest") && js.includes('params.get("product")'), "product enquiry prefill"],
  [js.includes("wa.me/917994440164?text=") && js.includes("showModal"), "review-before-WhatsApp flow"],
  [html.includes("google.com/maps/search") && html.includes("mailto:") && html.includes("tel:+917994440164"), "contact links"],
  [css.includes("prefers-reduced-motion") && css.includes("@media(max-width:680px)"), "motion and mobile support"],
  [invalidInternalLinks.length === 0 && !html.includes(".html\""), "clean internal links"],
  [!html.includes("theme-preview") && !js.includes("themeDefinitions"), "obsolete theme preview absent"],
  [audit.includes("Page-by-page inventory") && audit.includes("Migration checklist") && audit.includes("Issues, conflicts and confirmation list"), "content audit sections"]
];

const failed = checks.filter(([passed]) => !passed);
if (failed.length) {
  console.error(`Checks failed: ${failed.map(([, name]) => name).join(", ")}`);
  process.exit(1);
}

console.log(`Validated ${checks.length} seven-page content, functionality and accessibility requirements.`);
