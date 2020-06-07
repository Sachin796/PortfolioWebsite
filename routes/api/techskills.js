const router = require("express").Router();
const techskillsController = require("../../controller/techskillsController");

router.route("/").get(techskillsController.getTechSkills);
module.exports = router;
