"use strict";
module.exports = (sequelize, DataTypes) => {
  const Saga = sequelize.define(
    "Saga",
    {
      text: DataTypes.TEXT,
      photo: DataTypes.TEXT,
      video: DataTypes.TEXT,
      music: DataTypes.TEXT,
      relatesTo: DataTypes.STRING,
      expressId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Saga.associate = function (models) {
    Saga.belongsto(models.Express, { foreignKey: "expressId" });
    // associations can be defined here
  };
  return Saga;
};
