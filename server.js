const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = 8000;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".avif": "image/avif",
  ".pdf": "application/pdf"
};

function sendFile(filePath, res) {
  const extension = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[extension] || "application/octet-stream";

  res.writeHead(200, { "Content-Type": contentType });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  let requestPath = decodeURIComponent((req.url || "/").split("?")[0]);

  if (requestPath === "/") {
    requestPath = "/index.html";
  }

  const safePath = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(ROOT, safePath);

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      sendFile(filePath, res);
      return;
    }

    sendFile(path.join(ROOT, "index.html"), res);
  });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Serving on http://127.0.0.1:${PORT}`);
});
