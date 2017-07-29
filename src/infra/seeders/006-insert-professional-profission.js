'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('ProfessionalProfission', [{
      professionalId: 3,
      profissionId: 17
    },
    {
      professionalId: 4,
      profissionId: 2
    },
    {
      professionalId: 6,
      profissionId: 47
    },
    {
      professionalId: 7,
      profissionId: 38
    },
    {
      professionalId: 12,
      profissionId: 51
    },
    {
      professionalId: 13,
      profissionId: 29
    },
    {
      professionalId: 14,
      profissionId: 30
    },
    {
      professionalId: 16,
      profissionId: 65
    },
    {
      professionalId: 3,
      profissionId: 18
    },
    {
      professionalId: 4,
      profissionId: 58
    },
    {
      professionalId: 12,
      profissionId: 36
    },
    {
      professionalId: 16,
      profissionId: 63
    },
    {
      professionalId: 4,
      profissionId: 45
    },
    {
      professionalId: 7,
      profissionId: 77
    },
    {
      professionalId: 12,
      profissionId: 16
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Professional')
  }
}
