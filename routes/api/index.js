const router = require("express").Router();
const download = require("./download.js");
const techskills = require("./techskills.js");

router.use("/download", download);
router.use("/techskills", techskills);

module.exports = router;
