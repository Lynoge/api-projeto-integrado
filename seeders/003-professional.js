'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Professional', [{
      id: 3,
      rating: 7,
      description: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Diuretics paradis num copo é motivis de denguis. Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss deixa as pessoas mais interessantis.',
      profissionId: 1
    },
    {
      id: 4,
      rating: 8,
      description: 'Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. In elementis mé pra quem é amistosis quis leo. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Manduma pindureta quium dia nois paga.',
      profissionId: 2
    }], {})
  },

  down: function (queryInterface, Sequelize) { }
}
