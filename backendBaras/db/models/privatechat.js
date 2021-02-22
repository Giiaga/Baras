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
    PrivateChat.belongsTo(models.User, {
      as: "sender",
      foreignKey: "senderId",
    });
    PrivateChat.belongsTo(models.User, {
      as: "reciever",
      foreignKey: "recieverId",
    });
    // associations can be defined here
  };
  return PrivateChat;
};
