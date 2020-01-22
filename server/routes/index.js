const path = require("path");
const router = require("express").Router();
const introcontroller = require("../controller/introController.js");

router.route("/").get(introcontroller.findAll);

module.exports = router;
