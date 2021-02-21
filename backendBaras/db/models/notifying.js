"use strict";
module.exports = (sequelize, DataTypes) => {
  const Notifying = sequelize.define(
    "Notifying",
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      trustedId: { type: DataTypes.INTEGER, allowNull: true },
      notification: { type: DataTypes.STRING, allowNull: true },
      type: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  Notifying.associate = function (models) {
    Notifying.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Notifying;
};
