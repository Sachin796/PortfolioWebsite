const db = require("../models");
var Sequelize = require("sequelize");

module.exports = {
  findAll: function(req, res) {
    db.intro
      .findAll({})
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
