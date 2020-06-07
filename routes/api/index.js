const router = require("express").Router();
const download = require("./download.js");
const techskills = require("./techskills.js");

console.log("\x1b[36m Inside api->index.js -3");
router.use("/download", download);
router.use("/techskills", techskills);

module.exports = router;
