const { writeFileSync, statSync } = require("fs");

// This script is to generate a large file to test with streams
for (let i = 0; i < 100000; i++) {
  let additional_string =
    i > 0 ? Number(statSync("./content/large_file.txt").size) / 1000 : "";

  writeFileSync(
    "./content/large_file.txt",
    `\nCurrent iteration: ${i} file size: ${additional_string} kB`,
    { flag: "a" }
  );
}
