
'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Chat', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      origin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'User', key: 'id' }
      },
      destiny: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'User', key: 'id' }
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      /**
       * P -> Photo
       * T -> Text
       */
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
