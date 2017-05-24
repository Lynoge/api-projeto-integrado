'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('User', [{
      username: 'john lennon',
      name: 'lennon',
      email: 'john_lennon@mail.com',
      password: '123qwe',
      phone: 539087657,
      image: 'public/user_id',
      active: true,
      createAt: new Date(),
      type: 'R'
    },
    {
      username: 'curl johnson',
      name: 'johnson',
      email: 'curl_johnson@mail.com',
      password: '123qwe',
      phone: 539087657,
      image: 'public/user_id',
      active: true,
      createAt: new Date(),
      type: 'R'
    },
    {
      username: 'joao',
      name: 'joão carlos',
      email: 'joao_carlos@mail.com',
      password: '123qwe',
      phone: 539087657,
      image: 'public/user_id',
      active: true,
      createAt: new Date(),
      type: 'P'
    },
    {
      username: 'jose',
      name: 'josé aldo',
      email: 'jose_aldo@mail.com',
      password: '123qwe',
      phone: 539087657,
      image: 'public/user_id',
      active: true,
      createAt: new Date(),
      type: 'P'
    }], {})
  },

  down: function (queryInterface, Sequelize) { }
}
