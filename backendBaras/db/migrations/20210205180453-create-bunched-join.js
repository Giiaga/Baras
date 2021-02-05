"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("BunchedJoins", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      barasId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "Baras" },
      },
      bunchedId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Buncheds" },
      },
      storyId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "Stories" },
      },
      expressId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "Expresses" },
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
    return queryInterface.dropTable("BunchedJoins");
  },
};
