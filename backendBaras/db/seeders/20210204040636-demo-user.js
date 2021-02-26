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
          photo:
            "data:image/jpeg;base64,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",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "demoUser2@gmail.com",
          username: "demoUser2",
          photo:
            "https://gifimage.net/wp-content/uploads/2017/10/bougie-gif-14.gif",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "demoUser3@gmail.com",
          username: "demoUser3",
          photo:
            "https://www.bing.com/th/id/OGC.98ffcc7ba6291d9e35d0ecac8c7b73b9?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fnD5bOSfzzwehq%2f200.gif&ehk=OfDMmGAepViI03PvnFNrMGfP2daykWV%2b7xMk0lCXt0Y%3d",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "giiaga@gmail.com",
          username: "giiaga",
          photo:
            "https://th.bing.com/th/id/OIP.p8SDvxKX_rIkAV5jbHpG6gHaED?w=311&h=180&c=7&o=5&dpr=1.25&pid=1.7",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "demoUser4@gmail.com",
          username: "demoUser4",
          photo:
            "https://www.bing.com/th?id=OIP.xPDj0aO34tFe3-Ukb50WvwHaEx&w=140&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "demoUser5@gmail.com",
          username: "demoUser5",
          photo:
            "https://www.bing.com/th?id=OIP._hqDD0GiKrozvxzmKXqJ3wHaE8&w=135&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "demoUser6@gmail.com",
          username: "demoUser6",
          hashedPassword: bcrypt.hashSync("password"),
          photo:
            "https://www.bing.com/th?id=OIP.CeURX0rTJtJxikqqTHztdAHaE8&w=135&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
        },
        {
          email: "demoUser7@gmail.com",
          username: "demoUser7",
          hashedPassword: bcrypt.hashSync("password"),
          photo:
            "https://www.bing.com/th?id=OIP.mGKSz4HBV7oGUTjjDpPn7gHaE8&w=159&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
        },
        {
          email: "demoUser8@gmail.com",
          username: "demoUser8",
          photo:
            "https://www.bing.com/th?id=OIP.gHdZaRX7e5kvUXTn7uzYSAHaDa&w=231&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
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
