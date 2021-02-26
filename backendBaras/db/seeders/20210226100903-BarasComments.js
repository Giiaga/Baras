"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "BarasComments",
      [
        {
          userId: 1,
          text: "Hey how are you",
          photo:
            "data:image/jpeg;base64,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",
          music: null,
          video: null,
          barasId: 1,
        },
        {
          userId: 3,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          photo:
            "data:image/jpeg;base64,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",
          music: null,
          video: null,
          barasId: 1,
        },
        {
          userId: 5,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          photo:
            "data:image/jpeg;base64,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",
          music: null,
          video: null,
          barasId: 2,
        },
        {
          userId: 5,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          photo:
            "https://www.bing.com/th?id=OIP.CeURX0rTJtJxikqqTHztdAHaE8&w=135&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
          music: null,
          video: null,
          barasId: 2,
        },
        {
          userId: 2,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          photo:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAH0ArwMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAABAgMABAUG/9oACAEBAAAAAPnSSzMxZiWO2wVeEszuzOzFycNtOXBSju1TRyztnyrOUfP1rOa9FSzZaYJSEt5VUFaNenT1AAsAuHP83VKi1Ha3d0Mea2oTCfx5pZjV2swrW6yRYc0/Ope12xK5dI1d+XjppUovJpv2hn7L1yJyeNbqiE64s5HZ3qpqy0PlSbzrZmdqMbZtVhzeVFL0bponbyTd8WbZvO5eal3qypfBsQMDTg4Gy1qzEuxVZ7Z0j3GPni4DYMci44nWE15Kq5VWYA7a3MaUiP/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/9oACgICEAMQAAAA3zpMYUCYxppPMqgYImla1G0+PSGFxpjcuaSA0149s7ksJuNcrWk1pmsKGmWpc1DTFcN2qU1ZeUuTO4YhjAVFzSThypaYwYJpgS2hf//EAB8QAAICAwEBAQEBAAAAAAAAAAECAxIABBETFCAFEP/aAAgBAQABAgD8cC1qFrWtQta1rQx0K5wKFChQoUKEoEpSlKUqQQSAFChAoUR+axUCCMR0oEoYyhQg4E4pBACqFUR0EfnXtanFNXQL5qPIx9VhgKsJYhQoUoE4R0sC2NJBIXGFgwYOG6uzFsA+vo22kgfOESIsSt6iZZPQMCMAR2nE0e020Nn6W2htO8hYWokHxppfINfwERioQGt9I2VYRiHZmG4rFW2Bsx7WzOdaWXERdsP8Y/kxaHl7iRsaXYnGqmgmtzgwbPQgWlYY1hGs+qIfKlQvnu6yti4IzAIhHQIE8xgbthKGEvtsO2x9iv7pKAmr8keSwtMHD96MBtbozeCiXCqDVIPoX4kzPhwFZHk9PT0E4n3T0IGZVdX7a1g4axcve9w9zIAuy8T6rRpnmWDmS973uXt2wb06H+nBM0gbFb/Ceg97+fMlsB76Pn//xAA0EAACAgECAwYFAwIHAAAAAAABAgARAxIhMUFRBBBhcYGREyAiQqEjMlIUQDBDU1RicoL/2gAIAQEAAz8A/sj/AH4Pf41B594ggidDMfQwQdyz/j3Fe8GV3j5BBdaTOimH+JlRDxaLE5kRSNl/Ev7YpAIIoxW5iaeDCEd9d5c9zQ9DD/ExhOtxJjHL8TH0b2MTkre0EAMKqVhPDaERhyhv5WTYTM3FUj3vkbyMANEknyMpSSK849gY8DP48BMrCzj0+FzKWoIAOpMaGNMr7EoEI34gzs2Lgy+rXAIsXhqjCDmoiHlEobRPGDrAhscY5+8xxsGI9ZlUmjHLiiNNc4pH1aR5XOjYx5gzMOGTF6AztB/zFEzc8x9433MT69wA5TN/BvaZid8ZqXzEX7vwTMaiy5rxMTxlfdL4NfkLjcmPtGHM+0Pj7S+DD2j70w247RRuc2MxiLRGf/qtztTDbs7+tCdsPFUEy8yPQTP2YhhjUp1aKd2FGfE3RgY0yMRoQCZK3RD6mMTT418NMJCJgLhmM7U95H382jsMaspGlaG81Cq9YRTJdjgRO2hSpotyczt7LXxl8+czZRT9rMHLKTMa3qwa/wD3MOOj/TMPICYRtbr5rMDcM59oOTavG4icQ8wZkbHZo9amRtlAMzbMXCzP/uYiimYNfTlMrX8LF5njHU3rF+Upa0KT13nQH3ngJXDu3iNs07MB+xTOzeMwn9mV0/Ijjh2oxzx7Rfmtx1FakPmk33xIfIVMX+mRMLbaTMeFDlx5KIG62RcpLcLw4gmA8LjKbU0ZkysFLXNPyHv0nuBhEs1TegigbmDkYekYIWGRlPJeszrvZnaXJHxCBHViQ7Hbgsc1WM+oMcKEFe1kwseBJ5AC7l8WCseAJjoCcmTR+REsBtRs7HZRDp/QROF390fJRcKTVBgKMYS+4fIYekuJqFOdf8YvGKCKo+xmIsDhLUKNmZTf1I34IiHV+kWOnjdVPhsCGq+OhrMxLuMVnmXNzUboLzoQGplQUuQzXR0qKH2juU1S163KiqfqTUPOot2gKjoTcPXuPWMOcFDU5snpcYOWDK0ysK4g8ajC6B8jK2Ciz1BhNWaMaqs1Npt/igbgQkU28OsMNTV4X6GYDV4jYmHMPoYiDRtkViF6zIlWoA84WNLHQ/VVeBgI2uACxGh6w9fxD/Iw9YevynkSJX7vfuZHBBowNetfURa1Jm0t03jizW/PkY54mx4xgdjNrvlcJ+Q9x7t/l/RGS4QdobBh1141BpY6RtCSbltU/8QAIhEAAwACAQQCAwAAAAAAAAAAAAERAhJRAyAhYRBBE2Jx/9oACAECAQE/AEiEJ3QnaxspS+xZn5EY1ohCGSG2bMbNjY2MXkvEFk/tF+Jfo19D6a9D6a5RquULDliRchPN+DTIXT5Zr+zIvY0ND/h4IKGyQ8zainJ4GjVDSQxMpSlExZFG0Npmnsaa7qUvxSn/xAAkEQACAgEDBAIDAAAAAAAAAAAAAQIRIRASYQMgQVEwoTFS8f/aAAgBAwEBPwCy++itUkykbUKL9FCXAlwJN+DZY+iyTjE3CnYpURmUZ9DUvKRdf03oU40SjFjgvDKelinyLqR8oUocilD9PofXhHFfRLrt/gpG1GC+Db5oVGCy+SWdKfZuecGbMlyE360rurRWZ9m75f/Z",
          music: null,
          video: null,
          barasId: 2,
        },
        {
          userId: 7,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          photo:
            "https://www.bing.com/th?id=OIP.gHdZaRX7e5kvUXTn7uzYSAHaDa&w=231&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
          music: null,
          video: null,
          barasId: 3,
        },
        {
          userId: 6,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          photo:
            "data:image/jpeg;base64,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",
          music: null,
          video: null,
          barasId: 3,
        },
        {
          userId: 6,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          photo:
            "https://www.bing.com/th?id=OIP.mGKSz4HBV7oGUTjjDpPn7gHaE8&w=159&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
          music: null,
          video: null,
          barasId: 3,
        },
        {
          userId: 1,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          photo:
            "data:image/jpeg;base64,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",
          music: null,
          video: null,
          barasId: 5,
        },
        {
          userId: 2,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          photo:
            "https://www.bing.com/th?id=OIP.NskEwQ42gPyJauZfnIFrSgHaEs&w=169&h=102&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
          music: null,
          video: null,
          barasId: 5,
        },
        {
          userId: 1,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          photo:
            "https://www.bing.com/th?id=OIP.k28IfOkpa9hUB1d36guzPgHaE8&w=159&h=102&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
          music: null,
          video: null,
          barasId: 7,
        },
        {
          userId: 3,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          photo:
            "https://www.bing.com/th?id=OIP.k28IfOkpa9hUB1d36guzPgHaE8&w=159&h=102&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
          music: null,
          video: null,
          barasId: 7,
        },
        {
          userId: 2,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          photo:
            "https://www.bing.com/th?id=OIP.2EVNHHX4D-jWbnofJsaQHAHaFj&w=141&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
          music: null,
          video: null,
          barasId: 6,
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
      "BarasComments",

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
