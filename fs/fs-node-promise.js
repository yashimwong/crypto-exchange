const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/subfolder/second.txt", "utf-8");

    await writeFile(
      "./content/result-promise.txt",
      `\nWriting.. \n${first} \n${second}`
    );
  } catch (error) {
    console.log(error);
  }
};

start();
