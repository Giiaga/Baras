'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    photo: DataTypes.STRING,
    quote: DataTypes.STRING,
    description: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    privateAccount: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};