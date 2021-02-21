"use strict";
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define(
    "Notification",
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      trustedId: { type: DataTypes.INTEGER, allowNull: true },
      notification: { type: DataTypes.STRING, allowNull: true },
      type: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  Notification.associate = function (models) {
    Notification.hasMany(models.User, { foreignKey: "userId" });
  };
  return Notification;
};
