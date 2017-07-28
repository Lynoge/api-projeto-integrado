'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Visit', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ratingRequester: {
        type: Sequelize.DECIMAL(3, 2),
        allowNull: true
      },
      ratingProfessional: {
        type: Sequelize.DECIMAL(3, 2),
        allowNull: true
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
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
      canceled: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Visit')
  }
}
