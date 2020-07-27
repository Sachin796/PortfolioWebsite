var db = require("../model/index");

module.exports = {
  getTechSkills: (req, res, next) => {
    db.techskills.findAll({}).then((data) => res.json({ data: data }));
  },
};
