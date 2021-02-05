"use strict";
module.exports = (sequelize, DataTypes) => {
  const BunchedJoin = sequelize.define(
    "BunchedJoin",
    {
      barasId: { type: DataTypes.INTEGER, allowNull: true },
      bunchedId: { type: DataTypes.INTEGER, allowNull: false },
      storyId: { type: DataTypes.INTEGER, allowNull: true },
      expressId: { type: DataTypes.INTEGER, allowNull: true },
    },
    {}
  );
  BunchedJoin.associate = function (models) {
    // associations can be defined here
  };
  return BunchedJoin;
};
