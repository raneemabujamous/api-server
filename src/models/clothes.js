const clothes = (sequelize, DataTypes) =>
  sequelize.define("clothes", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
    },
  });

module.exports = clothes;
("use strict");
