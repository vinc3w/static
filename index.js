const { rename, readdirSync } = require("fs");
const { join } = require("path");

const path = join(__dirname, "LaufeyBot", "streams");
const directories = readdirSync(path);

directories.forEach(d => {

  const dir = join(path, d);
  const files = readdirSync(dir);

  files.forEach(f => {

    rename(join(path, d, f), join(path, f), function (err) {
      console.log(err)
    });

  });
  
});
