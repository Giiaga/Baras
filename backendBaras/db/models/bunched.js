"use strict";
module.exports = (sequelize, DataTypes) => {
  const Bunched = sequelize.define(
    "Bunched",
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
  Bunched.associate = function (models) {
    Bunched.belongsToMany(models.Express, {
      through: "bunchedjoin",
      foreignKey: "bunchedId",
      otherKey: "expressId",
    });
    Bunched.belongsToMany(models.Story, {
      through: "BunchedJoin",
      foreignKey: "bunchedId",
      otherKey: "storyId",
    });
    Bunched.belongsToMany(models.Baras, {
      through: "BunchedJoin",
      foreignKey: "bunchedId",
      otherKey: "barasId",
    });
    Bunched.belongsTo(models.User, { foreignKey: "userId" });
    // associations can be defined here
  };
  return Bunched;
};
