import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..", "dist");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp"
};
const server = createServer(async (request, response) => {
  try {
    let pathname = new URL(request.url, "http://localhost").pathname;
    let file = join(root, pathname === "/" ? "index.html" : pathname);
    if ((await stat(file)).isDirectory()) file = join(file, "index.html");
    response.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream" }); response.end(await readFile(file));
  } catch { response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" }); response.end(await readFile(join(root, "404.html"))); }
});

const host = "127.0.0.1";
const preferredPort = Number(process.env.PORT) || 3000;
let port = preferredPort;

server.on("error", (error) => {
  if (error.code === "EADDRINUSE" && port < preferredPort + 10) {
    port += 1;
    console.log(`Port ${port - 1} is already in use; trying ${port}...`);
    server.listen(port, host);
    return;
  }

  throw error;
});

server.on("listening", () => console.log(`Local: http://${host}:${port}`));
server.listen(port, host);
