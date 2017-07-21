'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Profission', [
      {
        id: 1,
        name: 'Mecânico'
      },
      {
        id: 2,
        name: 'Eletricista'
      }], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Profission', null, {});
  }
}
