'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Visit', [{
      date: new Date('07/28/2017 14:36:45'),
      ratingProfessional: 2.5,
      ratingRequester: 4.8,
      professionalId: 3,
      requesterId: 1,
      status: "PENDENTE"
    },
    {
      date: new Date('06/30/2017 13:55:45'),
      ratingProfessional: 4.55,
      ratingRequester: 3.6,
      endDate: new Date(),
      professionalId: 4,
      requesterId: 2,
      status: "CONCLUIDO"
    },
    {
      date: new Date('07/29/2017 08:55:45'),
      endDate: new Date(),
      professionalId: 6,
      requesterId: 5,
      status: "EM ANDAMENTO"
    },
    {
      date: new Date('05/28/2017 09:12:36'),
      endDate: new Date(),
      professionalId: 7,
      requesterId: 2,
      status: "CONCLUIDO"
    },
    {
      date: new Date('06/14/2017 22:05:45'),
      endDate: new Date(),
      professionalId: 12,
      requesterId: 8,
      status: "CONCLUIDO"
    },
    {
      date: new Date('07/26/2017 19:35:45'),
      endDate: new Date(),
      professionalId: 13,
      requesterId: 9,
      status: "PENDENTE"
    },
    {
      date: new Date('07/28/2017 21:25:45'),
      endDate: new Date(),
      professionalId: 14,
      requesterId: 10,
      status: "PENDENTE"
    },
    {
      date: new Date('06/02/2017 12:15:45'),
      endDate: new Date(),
      professionalId: 16,
      requesterId: 11,
      status: "CONCLUIDO"
    },
    {
      date: new Date('07/29/2017 10:01:45'),
      endDate: new Date(),
      professionalId: 4,
      requesterId: 15,
      status: "EM ANDAMENTO"
    },
    {
      date: new Date('06/23/2017 13:45:45'),
      endDate: new Date(),
      professionalId: 6,
      requesterId: 9,
      status: "CONCLUIDO"
    },
    {
      date: new Date('07/29/2017 07:40:45'),
      endDate: new Date(),
      professionalId: 4,
      requesterId: 2,
      status: "EM ANDAMENTO"
    },
    {
      date: new Date('07/07/2017 17:07:45'),
      endDate: new Date(),
      professionalId: 12,
      requesterId: 15,
      status: "CONCLUIDO"
    },
    {
      date: new Date('05/13/2017 22:53:45'),
      endDate: new Date(),
      professionalId: 4,
      requesterId: 1,
      status: "CONCLUIDO"
    },
    {
      date: new Date('07/26/2017 20:48:45'),
      endDate: new Date(),
      professionalId: 16,
      requesterId: 5,
      status: "PENDENTE"
    },
    {
      date: new Date('06/28/2017 15:33:45'),
      endDate: new Date(),
      professionalId: 3,
      requesterId: 2,
      status: "CONCLUIDO"
    },
    {
      date: new Date('07/29/2017 06:55:45'),
      endDate: new Date(),
      professionalId: 7,
      requesterId: 8,
      status: "EM ANDAMENTO"
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Visit')
  }
}
