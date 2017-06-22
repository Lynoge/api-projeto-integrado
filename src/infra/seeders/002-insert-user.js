'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('User', [{
      name: 'lennon',
      nickname: 'Lennon',
      email: 'john_lennon@mail.com',
      password: '123qwe',
      phone: 539087657,
      image: 'public/user_id',
      active: true,
      createAt: new Date(),
      type: 'R'
    },
    {
      name: 'johnson',
      nickname: 'Johnson',
      email: 'curl_johnson@mail.com',
      password: '123qwe',
      phone: 539087657,
      image: 'public/user_id',
      active: true,
      createAt: new Date(),
      type: 'R'
    },
    {
      name: 'joao',
      nickname: 'João',
      email: 'joao_carlos@mail.com',
      password: '123qwe',
      phone: 539087657,
      image: 'public/user_id',
      active: true,
      createAt: new Date(),
      type: 'P'
    },
    {
      name: 'jose',
      nickname: 'José',
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
