var path = require("path");
const { DownloaderHelper } = require("node-downloader-helper");

module.exports = function(app) {
  app.get("/", (req, res) => {
    console.log(__dirname);
    // res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/reservations", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/reservation.html"));
  });

  app.get("/file.doc?", (req, res) => {
    const dl = new DownloaderHelper(
      __dirname,
      "../client/public/Sachin_Jhaveri_Resume.docx"
    );

    dl.on("end", () => console.log("Download Completed"));
    dl.start();
  });
};
