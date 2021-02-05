"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Sagas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      text: {
        type: Sequelize.TEXT,
      },
      photo: {
        type: Sequelize.TEXT,
      },
      video: {
        type: Sequelize.TEXT,
      },
      music: {
        type: Sequelize.TEXT,
      },
      relatesTo: {
        type: Sequelize.TEXT,
      },
      expressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Expresses" },
      },
      positionH: {
        type: Sequelize.INTEGER,
      },
      positionV: {
        type: Sequelize.INTEGER,
      },
      width: {
        type: Sequelize.INTEGER,
      },
      height: {
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
    return queryInterface.dropTable("Sagas");
  },
};
