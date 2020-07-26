var db = require("../model/techskillsmodal.js");

module.exports = {
  getTechSkills: function (req, res, next) {
    console.log("Inside techskills");
    // db.Techskills.findAll({}).then((data) => console.log(data));
  },
};
