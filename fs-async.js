const { readFile, writeFile } = require("fs");

console.log("Starting..");
// asynchronous approach - event driven : uses a callback
readFile("./content/first.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Done with reading file 1.");
  const first = result;
  readFile("./content/subfolder/second.txt", "utf-8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Done with reading file 2.");
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first} , ${second} \n`,
      { flag: "a" },
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log("Done with write task 3.");
      }
    );
  });
});
console.log("Starting next task");
