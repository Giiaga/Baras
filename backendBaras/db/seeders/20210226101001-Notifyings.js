"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Notifyings",
      [
        {
          userId: 4,
          trustedId: 7,
          notification: "add me",
          type: "trustRequest",
        },
        {
          userId: 4,
          trustedId: 2,
          notification: "add me",
          type: "trustRequest",
        },
        {
          userId: 4,
          trustedId: 3,
          notification: "add me",
          type: "trustRequest",
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
      "Notifyings",

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
