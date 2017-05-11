'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('CreditCardTransition', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      creditCardId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'CreditCard', key: 'id' }
      },
      paymentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Payment', key: 'id' }
      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('CreditCardTransition')
  }
}
