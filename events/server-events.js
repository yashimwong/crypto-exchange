const http = require("http");

// Using Event Emitter API
const server = http.createServer();

// Emits Request Event (Behind the scene)
// Subscribe/Listen/Respond to it
server.on("request", (req, res) => {
  res.end("Welcome~");
});

server.listen(5000);
