'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Requester', [
    {
      id: 1
    },
    {
      id: 2
    }], {})
  },

  down: function (queryInterface, Sequelize) { }
}
