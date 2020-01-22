module.exports = function(sequelize, DataTypes) {
  var Intro = sequelize.define("intro", {
    description: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  });

  return Intro;
};
