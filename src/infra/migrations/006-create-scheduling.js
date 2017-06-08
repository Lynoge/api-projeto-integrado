'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Scheduling', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: 'Visit', key: 'id' }
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Scheduling')
  }
}
