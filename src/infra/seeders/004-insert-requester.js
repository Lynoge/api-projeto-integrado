'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Requester', [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 5
    },
    {
      id: 8
    },
    {
      id: 9
    },
    {
      id: 10
    },
    {
      id: 11
    },
    {
      id: 15
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Requester')
  }
}
