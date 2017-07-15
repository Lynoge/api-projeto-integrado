
'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Payment', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cost: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      paid: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      dueDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      professionalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Professional', key: 'id' }
      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Payment')
  }
}
