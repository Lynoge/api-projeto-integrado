'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Professional', 'profissionId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'Profission', key: 'profissionId' }
    })
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn('Professional', 'profissionId')
  }
};
