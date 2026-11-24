import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(resolve(root, "index.html"), resolve(dist, "index.html"));
await cp(resolve(root, "app", "globals.css"), resolve(dist, "styles.css"));
await cp(resolve(root, "app", "site.js"), resolve(dist, "site.js"));
const html = await readFile(resolve(dist, "index.html"), "utf8");
await writeFile(resolve(dist, "404.html"), html);
console.log("Built static site in dist/");
