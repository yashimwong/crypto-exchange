const { createReadStream } = require("fs");

// Stream - for large files where it cannot load all data into
// a variable
const stream = createReadStream("./content/large_file.txt", {
  highWaterMark: 128000,
  encoding: "utf-8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (error) => {
  console.log(error);
});
