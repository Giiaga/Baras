"use strict";
module.exports = (sequelize, DataTypes) => {
  const BarasLikes = sequelize.define(
    "BarasLikes",
    {
      barasId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  BarasLikes.associate = function (models) {
    BarasLikes.belongsTo(models.Baras, { foreignKey: "barasId" });
    BarasLikes.belongsTo(models.User, { foreignKey: "userId" });
    // associations can be defined here
  };
  return BarasLikes;
};
