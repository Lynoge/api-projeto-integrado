
'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Chat', {
      professionalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Professional', key: 'id' }
      },
      requesterId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Requester', key: 'id' }
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Chat')
  }
}
