const FS = require("fs");

const getData = (path) => {
  const jsonData = FS.readFileSync(path, "utf8");
  const data = JSON.parse(jsonData);
  return data;
};

module.exports = getData;
