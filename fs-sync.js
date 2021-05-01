const { readFileSync, writeFileSync } = require("fs");

console.log("Starting..");
// synchronous approach - will wait to execute commands one by one
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/subfolder/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first} , ${second} \n`,
  { flag: "a" }
);
console.log("Done with this task");
console.log("Starting the next task.");
