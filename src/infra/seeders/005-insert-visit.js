'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Visit', [{
      rating: 3.89,
      date: new Date('02/25/2017 11:30:45'),
      professionalId: 3,
      requesterId: 1,
      status: "PENDENTE"
    },
    {
      rating: 4.55,
      date: new Date('05/30/2017 13:55:45'),
      endDate: new Date(),
      professionalId: 4,
      requesterId: 2,
      status: "CONCLUIDO"
    }], {})
  },

  down: function (queryInterface, Sequelize) { }
}
