"use strict";
module.exports = (sequelize, DataTypes) => {
  const BarasTrustedJoin = sequelize.define(
    "BarasTrustedJoin",
    {
      barasId: { type: DataTypes.INTEGER, allowNull: false },
      trustedId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  BarasTrustedJoin.associate = function (models) {
    // associations can be defined here
  };
  return BarasTrustedJoin;
};
