"use strict";
module.exports = (sequelize, DataTypes) => {
  const Express = sequelize.define(
    "Express",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Express.associate = function (models) {
    Express.belongsTo(models.User, { foreignKey: "userId" });
    Express.belongsToMany(models.Bunched, {
      through: "BunchedJoin",
      foreignKey: "expressId",
      otherKey: "bunchedId",
    });
    Express.hasMany(models.Saga, { foreignKey: "expressId" });
    // associations can be defined here
  };
  return Express;
};
