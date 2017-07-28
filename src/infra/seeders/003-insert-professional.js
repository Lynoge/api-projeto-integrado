'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Professional', [{
      id: 3,
      description: 'Trabalho das 08:00 as 16:00. Atendo somente clientes da minha cidade. Cobro deslocamento. Tenho boas referencias.'
    },
    {
      id: 4,
      description: 'Atendo somente na capital. Trabalho de excelencia, com equipamentos novos. Especialista.'
    },
    {
      id: 6,
      description: 'Experiencia de 10 anos na area, com as maiores empresas do mercado.'
    },
    {
      id: 7,
      description: 'Atendo 24hs em qualquer lugar, so chamar.'
    },
    {
      id: 12,
      description: 'Resolvo seu problema rapido e facil.'
    },
    {
      id: 13,
      description: 'Preciso muito de trabalho, por favor me chame.'
    },
    {
      id: 14,
      description: 'Tenho disponibilidade apenas no turno da noite, apos as 18hs. Trabalho bem e tenho um ajudante.'
    },
    {
      id: 16,
      description: 'Tenho talento e simpatia. Me contrate e nao ira se arrepender.'
    },], {})
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Professional')
  }
}
