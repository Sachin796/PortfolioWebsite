var db = require("../model/index");

module.exports = {
  getTechSkills: (req, res, next) => {
    // res.send({ database: Object.keys(db) });
    db.techskills.findAll({}).then((data) => res.json({ data: data }));
  },
};
