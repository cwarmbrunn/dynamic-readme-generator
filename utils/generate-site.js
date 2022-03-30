// Grants access to the file system functionality
const fs = require("fs");

// Write File
const writeFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./src/index.md", data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ ok: true, message: "README.md created!" });
    });
  });
};

module.exports = {
  writeFile,
};
