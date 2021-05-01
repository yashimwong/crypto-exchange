const { readFile, writeFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (error, data) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(data);
      }
    });
  });
};

const writeText = (path, data) => {
  return new Promise((resolve, reject) => {
    writeFile(path, data, (error, result) => {
      if (error) {
        return reject(error);
      } else {
        return resolve();
      }
    });
  });
};

const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/subfolder/second.txt");
    writeText("./content/promise-write.txt", `${first} ${second}`);
  } catch (error) {
    console.log(error);
  }
};

start();
