const router = require("express").Router();
console.log("Inside /api/techskills.js");
const techskillsController = require("../../controller/techskillsController");

router.route("/").get(techskillsController.getTechSkills);
module.exports = router;
