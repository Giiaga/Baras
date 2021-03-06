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
    Trust.belongsTo(models.User, { as: "UserItSelf", foreignKey: "userId" });
    Trust.belongsTo(models.User, { as: "Trusted", foreignKey: "trustedId" });
    Trust.belongsToMany(models.Baras, {
      through: "BarasTrustedJoins",
      otherKey: "barasId",
      foriegnKey: "trustedId",
    });
    // associations can be defined here
  };
  return Trust;
};
