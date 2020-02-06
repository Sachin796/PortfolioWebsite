var path = require("path");
const { DownloaderHelper } = require("node-downloader-helper");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
