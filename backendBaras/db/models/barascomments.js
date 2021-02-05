"use strict";
module.exports = (sequelize, DataTypes) => {
  const BarasComments = sequelize.define(
    "BarasComments",
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      text: { type: DataTypes.TEXT, allowNull: false },
      photo: DataTypes.TEXT,
      music: DataTypes.TEXT,
      video: DataTypes.TEXT,
      barasId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  BarasComments.associate = function (models) {
    BarasComments.belongsTo(models.User, { foreignKey: "userId" });
    BarasComments.belongsTo(models.Baras, { foreignKey: "barasId" });
    // associations can be defined here
  };
  return BarasComments;
};
