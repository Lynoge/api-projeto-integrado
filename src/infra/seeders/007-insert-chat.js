'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Chat', [
      {
        origin: 1,
        destiny: 4,
        date: new Date(),
        type: 'T',
        description: 'Teste'
      }
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Chat', null, {});
  }
}
