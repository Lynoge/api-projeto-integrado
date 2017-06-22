'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('User', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updateAt: {
        type: Sequelize.DATE
      },
      type: {
        type: Sequelize.CHAR(1)
      },
      chatId: {
        type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING
      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('User')
  }
}