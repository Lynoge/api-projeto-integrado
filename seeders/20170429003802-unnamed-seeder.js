'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Professional', [{
      name: 'John Doe',
      email: 'john_doe@mail.com',
      password: 'foo',
    },
    {
      name: 'Gabriel Rosa',
      email: 'gabriel_rosa@mail.com',
      password: 'foo',
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
