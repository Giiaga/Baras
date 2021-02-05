"use strict";
module.exports = (sequelize, DataTypes) => {
  const PrivateChat = sequelize.define(
    "PrivateChat",
    {
      senderId: { type: DataTypes.INTEGER, allowNull: false },
      recieverId: { type: DataTypes.INTEGER, allowNull: false },
      message: { type: DataTypes.TEXT, allowNull: false },
    },
    {}
  );
  PrivateChat.associate = function (models) {
    PrivateChat.belongsTo(models.User, { foreignKey: "senderId" });
    PrivateChat.belongsTo(models.User, { foreignKey: "recieverId" });
    // associations can be defined here
  };
  return PrivateChat;
};
