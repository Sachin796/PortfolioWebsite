module.exports = function (sequelize, DataTypes) {
  var Techskills = sequelize.define(
    "portfolio_website",
    {
      frontend: {
        type: DataTypes.STRING(25),
      },
      backend: {
        type: DataTypes.STRING(25),
      },
      database: {
        type: DataTypes.STRING(25),
      },
      aws: {
        type: DataTypes.STRING(25),
      },
      programming_scripting: {
        type: DataTypes.STRING(45),
      },
    },
    {
      tableName: "techskills",
    }
  );

  return Techskills;
};
