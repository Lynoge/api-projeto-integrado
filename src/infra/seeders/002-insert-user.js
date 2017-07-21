'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('User', [{
      name: 'lennon',
      nickname: 'Lennon',
      email: 'john_lennon@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',
      phone: 539087657,
      image: 'public/user_id',
      rating: 3.89,
      active: true,
      createAt: new Date(),
      type: 'R',
      token: 'token_lennon',
      chatId: 'chat_id_lennon'
    },
    {
      name: 'johnson',
      nickname: 'Johnson',
      email: 'curl_johnson@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',
      phone: 539087657,
      image: 'public/user_id',
      rating: 4.75,
      active: true,
      createAt: new Date(),
      type: 'R',
      token: 'token_johnson',
      chatId: 'chat_id_johnson'
    },
    {
      name: 'joao',
      nickname: 'João',
      email: 'joao_carlos@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',
      phone: 539087657,
      image: 'public/user_id',
      rating: 3.5,
      active: true,
      createAt: new Date(),
      type: 'P',
      token: 'token_joao',
      chatId: 'chat_id_joao'
    },
    {
      name: 'jose',
      nickname: 'José',
      email: 'jose_aldo@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',
      phone: 539087657,
      image: 'public/user_id',
      rating: 2.78,
      active: true,
      createAt: new Date(),
      type: 'P',
      token: 'token_jose',
      chatId: 'chat_id_jose'
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('User')
  }
}
