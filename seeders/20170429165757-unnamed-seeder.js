'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Profission', [
      {
        name: 'Mecânico'
      },
      {
        name: 'Eletricista'
      }], {})

    return queryInterface.bulkInsert('Professional', [{
      name: 'John Doe',
      email: 'john_doe@mail.com',
      password: 'foo',
      description: 'Fusce sollicitudin feugiat lacus lobortis eleifend odio habitant fermentum, curabitur quis himenaeos sagittis auctor orci congue, velit amet senectus viverra blandit sociosqu laoreet. Lobortis leo ad ornare adipiscing ante molestie sociis, fermentum erat tellus ac sit arcu pretium nunc, purus odio vestibulum amet viverra ridiculus.',
      profissionId: 1
    },
    {
      name: 'Gabriel Rosa',
      email: 'gabriel_rosa@mail.com',
      password: 'foo',
      description: 'Fusce sollicitudin feugiat lacus lobortis eleifend odio habitant fermentum, curabitur quis himenaeos sagittis auctor orci congue, velit amet senectus viverra blandit sociosqu laoreet. Lobortis leo ad ornare adipiscing ante molestie sociis, fermentum erat tellus ac sit arcu pretium nunc, purus odio vestibulum amet viverra ridiculus.',
      profissionId: 1
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
}
