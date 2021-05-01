const { readFile, writeFile, write } = require("fs");

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

const writeText = (path, result) => {
  return new Promise((resolve, reject) => {
    writeFile(
      path,
      () => {
        let output_string;
        result.map((r) => output_string.concat(r));
        return output_string;
      },
      (error, result) => {
        if (error) {
          return reject(error);
        } else {
          return resolve();
        }
      }
    );
  });
};
