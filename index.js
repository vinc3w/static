const { snakeToCamel } = require("caseparser");
const { readdirSync, writeFile } = require("fs");
const { join } = require("path");

const path = join(__dirname, "LaufeyBot", "data", "albums");
readdirSync(path).forEach(albumId => {
  const filePath = join(path, albumId);
  const data = require(filePath);
  writeFile(filePath, JSON.stringify(snakeToCamel(data), null, 2), () => {})
});
