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
      photo: {
        type: Sequelize.TEXT,
      },
      music: {
        type: Sequelize.TEXT,
      },
      video: {
        type: Sequelize.TEXT,
      },
      chapterWidth: {
        type: Sequelize.DECIMAL,
      },
      chapterHeight: {
        type: Sequelize.DECIMAL,
      },
      chapterH: {
        type: Sequelize.DECIMAL,
      },
      chapterV: {
        type: Sequelize.DECIMAL,
      },
      textWidth: {
        type: Sequelize.DECIMAL,
      },
      textHeight: {
        type: Sequelize.DECIMAL,
      },
      textH: {
        type: Sequelize.DECIMAL,
      },
      textV: {
        type: Sequelize.DECIMAL,
      },
      photoWidth: {
        type: Sequelize.DECIMAL,
      },
      photoHeight: {
        type: Sequelize.DECIMAL,
      },
      photoH: {
        type: Sequelize.DECIMAL,
      },
      photoV: {
        type: Sequelize.DECIMAL,
      },
      musicWidth: {
        type: Sequelize.DECIMAL,
      },
      musicHeight: {
        type: Sequelize.DECIMAL,
      },
      musicH: {
        type: Sequelize.DECIMAL,
      },
      musicV: {
        type: Sequelize.DECIMAL,
      },
      videoWidth: {
        type: Sequelize.DECIMAL,
      },
      videoHeight: {
        type: Sequelize.DECIMAL,
      },
      videoH: {
        type: Sequelize.DECIMAL,
      },
      videoV: {
        type: Sequelize.DECIMAL,
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
