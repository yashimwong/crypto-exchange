const path = require("path");

// joins path together. normalize by default (trailing slashes are removed)
const file_path = path.join("/content", "subfolder", "test.txt");
console.log(file_path);

// gets the last portion of path
const base_name = path.basename(file_path);
console.log(base_name);

// absolute path
console.log(__dirname);
const absolute_path = path.resolve(__dirname, "content", "subfolder", "test");
console.log(absolute_path);
