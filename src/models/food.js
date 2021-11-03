const food = (sequelize, DataTypes) =>
  sequelize.define("food", {
    kind: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    healthy: {
      type: DataTypes.STRING,
    },
  });

module.exports = food;
