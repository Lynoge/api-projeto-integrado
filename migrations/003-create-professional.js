'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Professional', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: 'User', key: 'id' }
      },      
      rating: { 
        type: Sequelize.INTEGER
      },
      description: { 
        type: Sequelize.TEXT,
        leight: 'long'
      },
      profissionId: {
        type: Sequelize.INTEGER,
        references: { model: 'Profission', key: 'id' }
      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Professional')
  }
}
