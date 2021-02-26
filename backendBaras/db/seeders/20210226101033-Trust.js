"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Trust",
      [
        {
          userId: 4,
          trustedId: 1,
        },
        {
          userId: 4,
          trustedId: 6,
        },
        {
          userId: 4,
          trustedId: 5,
        },
        {
          userId: 4,
          trustedId: 8,
        },
        {
          userId: 1,
          trustedId: 4,
        },
        {
          userId: 6,
          trustedId: 4,
        },
        {
          userId: 5,
          trustedId: 4,
        },
        {
          userId: 8,
          trustedId: 4,
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
    return queryInterface.bulkDelete(
      "Trust",

      {}
    );
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
