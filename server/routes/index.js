const path = require("path");
const router = require("express").Router();
const introcontroller = require("../controller/introController.js");
console.log("%c Inside routes", "background:red");
router.route("/").get(introcontroller.findAll);

module.exports = router;
