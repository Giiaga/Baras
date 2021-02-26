"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          senderId: 1,
          recieverId: 4,
          message: "hey",
        },
        {
          senderId: 4,
          recieverId: 1,
          message: "hey",
        },
        {
          senderId: 7,
          recieverId: 4,
          message: "Whats happeining",
        },
        {
          senderId: 4,
          recieverId: 7,
          message: "Working on the project",
        },
        {
          senderId: 7,
          recieverId: 4,
          message: "Hows the project going?",
        },
        {
          senderId: 4,
          recieverId: 7,
          message: "I didn't finish the project",
        },
      ],
      {}
    );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
