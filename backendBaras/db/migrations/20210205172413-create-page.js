"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Pages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pageNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      chapter: {
        type: Sequelize.STRING(100),
      },
      storyId: {
        type: Sequelize.INTEGER,
        references: { model: "Stories" },
      },
      text: {
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.TEXT,
      },
      music: {
        type: Sequelize.TEXT,
      },
      video: {
        type: Sequelize.TEXT,
      },
      chapterWidth: {
        type: Sequelize.INTEGER,
      },
      chapterHeight: {
        type: Sequelize.INTEGER,
      },
      chapterH: {
        type: Sequelize.INTEGER,
      },
      chapterV: {
        type: Sequelize.INTEGER,
      },
      textWidth: {
        type: Sequelize.INTEGER,
      },
      textHeight: {
        type: Sequelize.INTEGER,
      },
      textH: {
        type: Sequelize.INTEGER,
      },
      textV: {
        type: Sequelize.INTEGER,
      },
      imageWidth: {
        type: Sequelize.INTEGER,
      },
      imageHeight: {
        type: Sequelize.INTEGER,
      },
      imageH: {
        type: Sequelize.INTEGER,
      },
      imageV: {
        type: Sequelize.INTEGER,
      },
      musicWidth: {
        type: Sequelize.INTEGER,
      },
      musicHeight: {
        type: Sequelize.INTEGER,
      },
      musicH: {
        type: Sequelize.INTEGER,
      },
      musicV: {
        type: Sequelize.INTEGER,
      },
      videoWidth: {
        type: Sequelize.INTEGER,
      },
      videoHeight: {
        type: Sequelize.INTEGER,
      },
      videoH: {
        type: Sequelize.INTEGER,
      },
      videoV: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Pages");
  },
};
