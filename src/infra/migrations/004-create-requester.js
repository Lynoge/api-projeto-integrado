'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Requester', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: 'User', key: 'id' }
      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Requester')
  }
}
