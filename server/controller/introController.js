const db = require("../models");
var Sequelize = require("sequelize");

module.exports = {
  findAll: function(req, res) {
    console.log("Inside controller");
    db.intro
      .findAll({})
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
