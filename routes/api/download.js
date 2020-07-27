const router = require("express").Router();
const downloadController = require("../../controller/downloadController");

// console.log(downloadController.download());

router.get("/:filename", downloadController.download);
module.exports = router;
