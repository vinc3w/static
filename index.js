const { readdirSync, rename } = require("fs");
const { join } = require("path");

readdirSync(join("LaufeyBot", "mp3")).forEach(albumId => {
  readdirSync(join("LaufeyBot", "mp3", albumId)).forEach(trackId => {
    rename(join("LaufeyBot", "mp3", albumId, trackId), join("LaufeyBot", "mp3", albumId, trackId + ".mp3"), () => {});
  });
});
