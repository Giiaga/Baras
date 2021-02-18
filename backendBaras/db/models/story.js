"use strict";
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define(
    "Story",
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [0, 100],
        },
      },
      private: { type: DataTypes.BOOLEAN, defaultValue: false },
      trusted: { type: DataTypes.BOOLEAN, defaultValue: true },
      published: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {}
  );
  Story.associate = function (models) {
    Story.belongsToMany(models.Bunched, {
      through: "BunchedJoin",
      foreignKey: "storyId",
      otheryKey: "bunchedId",
    });
    Story.belongsTo(models.User, { foreignKey: "userId" });
    Story.hasMany(models.Page, { foreignKey: "storyId" });
    // associations can be defined here
  };
  return Story;
};
