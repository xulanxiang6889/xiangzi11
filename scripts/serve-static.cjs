const http = require("http");
const fs = require("fs");
const path = require("path");
const root = path.resolve(process.cwd(), "out");
const mime = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png" };
http.createServer((req, res) => {
  const clean = decodeURIComponent((req.url || "/").split("?")[0]);
  const candidates = [path.join(root, clean), path.join(root, clean, "index.html"), path.join(root, `${clean}.html`)];
  const file = candidates.find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
  if (!file) { res.statusCode = 404; res.end("Not found"); return; }
  res.setHeader("Content-Type", mime[path.extname(file)] || "application/octet-stream");
  fs.createReadStream(file).pipe(res);
}).listen(Number(process.argv[2] || 3100), "127.0.0.1");
