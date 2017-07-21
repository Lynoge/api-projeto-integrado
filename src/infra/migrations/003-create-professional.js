'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Professional', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: 'User', key: 'id' }
      },
      description: {
        type: Sequelize.TEXT
      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Professional')
  }
}
