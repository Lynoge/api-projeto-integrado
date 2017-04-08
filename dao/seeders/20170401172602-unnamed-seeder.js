'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Users', [{
        username: 'John Doe',
        createdAt: '2017-03-02',
        updatedAt: '2017-03-02',
      },
      {
        username: 'Gabriel Rosa',
        createdAt: '2017-03-02',
        updatedAt: '2017-03-02',
      }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
