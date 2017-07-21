'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('ProfessionalProfission', [{
      professionalId: 3,
      profissionId: 1
    },
    {
      professionalId: 3,
      profissionId: 2
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Professional')
  }
}
