import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const required = ["index.html", "app/globals.css", "app/site.js"];
await Promise.all(required.map((file) => access(resolve(root, file))));
const [html, css, js] = await Promise.all([
  readFile(resolve(root, "index.html"), "utf8"),
  readFile(resolve(root, "app/globals.css"), "utf8"),
  readFile(resolve(root, "app/site.js"), "utf8")
]);
const checks = [
  [html.includes("+91 79944 40164"), "phone number"], [html.includes("hmartbuildingsolutions@gmail.com"), "email"],
  [html.includes("Thonnakkal"), "address"], [html.includes("Kooraveettil Agencies"), "sister concerns"],
  [html.includes("Illustrative stock photography"), "stock label"], [js.includes("wa.me/917994440164?text="), "WhatsApp form"],
  [html.includes('aria-label="Main navigation"'), "navigation label"], [html.includes('type="application/ld+json"'), "structured data"],
  [css.includes("#103c31") && css.includes("#ae7b4f"), "forest and bronze palette"], [js.includes('data-material'), "material enquiry handoff"],
  [html.includes("Site inspection & consultation"), "site inspection service"], [html.includes("Waterproofing"), "waterproofing service"]
];
const failed = checks.filter(([ok]) => !ok);
if (failed.length) { console.error(`Checks failed: ${failed.map(([, name]) => name).join(", ")}`); process.exit(1); }
console.log(`Validated ${checks.length} content and accessibility requirements.`);
