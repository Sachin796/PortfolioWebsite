const router = require("express").Router();
console.log("Inside /api/download.js");
const downloadController = require("../../controller/downloadController");

router.route("/").get(downloadController.download);
module.exports = router;
