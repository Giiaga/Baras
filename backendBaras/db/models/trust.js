"use strict";
module.exports = (sequelize, DataTypes) => {
  const Trust = sequelize.define(
    "Trust",
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      trustedId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Trust.associate = function (models) {
    Trust.belongsTo(models.User, { foreignKey: "userId" });
    Trust.belongsTo(models.User, { foreignKey: "trustedId" });
    // associations can be defined here
  };
  return Trust;
};
