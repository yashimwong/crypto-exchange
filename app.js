const express = require("express");

const server = express();
const port = 3001;

server.get("/", (req, res) => {
    res.send("Hello World!");
});

server.listen(port, () => {
    console.log(`Server started at port http://localhost:${port}`);
});
