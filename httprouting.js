const http = require('http');
const port = 3239;

const server = http.createServer((req, res) => {
  console.log(req);
  res.setHeader("Content-Type", "text/html"); 
  res.statusCode = 200; 

  if (req.url === '/') {
    res.end("<h1>hi</h1>");
  } else if (req.url === '/hi') { 
    res.end("<h1>hi tmkc</h1>");
  } else {
    res.end("<h1>404 Not Found</h1>"); 
  }
});

server.listen(port, () => {
  console.log(`Server Fired Successfully on port ${port}`);
});
