const router = require("express").Router();
const emailController = require("../../controller/emailController");

router.get("/", emailController.sendEmail);
module.exports = router;
