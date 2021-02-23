"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Baras", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: "Users" },
        allowNull: false,
      },
      relatesTo: {
        type: Sequelize.STRING(100),
        allowNull: false,
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
      private: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      trusted: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
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
    return queryInterface.dropTable("Baras");
  },
};
