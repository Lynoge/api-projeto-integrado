'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Comment', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      edited: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      updateAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      authorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'User', key: 'id' }
      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Comment')
  }
}
