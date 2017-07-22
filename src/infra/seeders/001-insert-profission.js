'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Profission', [
      { name: 'Mecânico' },
      { name: 'Eletricista' },
      { name: 'Informática' },
      { name: 'Marceneiro' }
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Profission', null, {});
  }
}
