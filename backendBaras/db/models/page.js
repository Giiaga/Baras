"use strict";
module.exports = (sequelize, DataTypes) => {
  const Page = sequelize.define(
    "Page",
    {
      pageNumber: { type: DataTypes.INTEGER, allowNull: false },
      chapter: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 100],
        },
      },
      storyId: { type: DataTypes.INTEGER, allowNull: false },
      text: DataTypes.TEXT,
      photo: DataTypes.TEXT,
      music: DataTypes.TEXT,
      video: DataTypes.TEXT,
      chapterWidth: DataTypes.INTEGER,
      chapterHeight: DataTypes.INTEGER,
      chapterH: DataTypes.INTEGER,
      chapterV: DataTypes.INTEGER,
      textWidth: DataTypes.INTEGER,
      textHeight: DataTypes.INTEGER,
      textH: DataTypes.INTEGER,
      textV: DataTypes.INTEGER,
      photoWidth: DataTypes.INTEGER,
      photoHeight: DataTypes.INTEGER,
      photoH: DataTypes.INTEGER,
      photoV: DataTypes.INTEGER,
      musicWidth: DataTypes.INTEGER,
      musicHeight: DataTypes.INTEGER,
      musicH: DataTypes.INTEGER,
      musicV: DataTypes.INTEGER,
      videoWidth: DataTypes.INTEGER,
      videoHeight: DataTypes.INTEGER,
      videoH: DataTypes.INTEGER,
      videoV: DataTypes.INTEGER,
    },
    {}
  );
  Page.associate = function (models) {
    Page.belongsTo(models.Story, { foreignkey: "storyId" });
    // associations can be defined here
  };
  return Page;
};
