const fs = require("fs");
const http = require("http");
const path = require("path");

const port = 3002;

const server = http.createServer((req, res) => {
  // Correct the file path logic
  const filepath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);

  // Extract file extension
  const extName = String(path.extname(filepath)).toLowerCase();

  // MIME Types
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',// Its the extensions you want to allow
    '.png': 'image/png',
  };

  // Default to 'application/octet-stream' if the MIME type is not found
  const contentType = mimeTypes[extName] || 'application/octet-stream';

  // Read the file and handle errors
  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404: File kisi Bihari ne chura liya bro"); // Cleaner error message
      } else {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end(`500: Internal Server Error - ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });//Type of content from mimeTypes
      res.end(content, "utf-8");
    }
  });
});

// Listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
