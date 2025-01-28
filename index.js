const { snakeToCamel } = require("caseparser");
const { writeFile } = require("fs");
const { join } = require("path");

const path = join(__dirname, "LaufeyBot", "data", "albums.json");
const data = require(path);
data.items = data.items.filter(i => i.albumType !== "compilation");
writeFile(
  path,
  JSON.stringify(snakeToCamel(data), null, 2),
  () => {}
);
