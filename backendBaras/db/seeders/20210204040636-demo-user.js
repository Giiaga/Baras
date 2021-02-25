"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demoUser1@gmail.com",
          username: "demoUser1",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "demoUser2@gmail.com",
          username: "demoUser2",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "demoUser3@gmail.com",
          username: "demoUser3",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "giiaga@gmail.com",
          username: "giiaga",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "demoUser4@gmail.com",
          username: "demoUser4",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",

      {}
    );
  },
};
