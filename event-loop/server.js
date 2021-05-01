const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request event");
  res.end("Hello World");
});

server.listen(5000, () => {
  console.log("Server is online at http://localhost:5000");
});
