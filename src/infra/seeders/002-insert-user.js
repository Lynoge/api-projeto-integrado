'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('User', [{
      //id=1
      name: 'lennon',
      nickname: 'Lennon',
      email: 'john_lennon@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',
      phone: '53991887657',
      image: 'public/user_id',
      rating: 3.89,
      active: true,
      createAt: new Date(),
      type: 'R',
      token: 'token_lennon',
      chatId: 'chat_id_lennon',
      latitude: '-36.6662062',
      longitude: '-22.1219554'
    },
    {
      //id=2
      name: 'johnson',
      nickname: 'Johnson',
      email: 'curl_johnson@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',
      phone: '53996789087',
      image: 'public/user_id',
      rating: 4.75,
      active: true,
      createAt: new Date(),
      type: 'R',
      token: 'token_johnson',
      chatId: 'chat_id_johnson',
      latitude: '-29.6662062',
      longitude: '-51.1219554'
    },
    {
      //id=3
      name: 'raimundo',
      nickname: 'Raí',
      email: 'raimundo_leao@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',
      phone: '51989856698',
      image: '9c76b7ffgoku.jpg',
      rating: 4.8,
      active: true,
      createAt: new Date(),
      type: 'P',
      token: 'token_joao',
      chatId: 'chat_id_raimundo',
      latitude: '-31.0002776',
      longitude: '-54.1219554'
    },
    {
      //id=4
      name: 'jose',
      nickname: 'José',
      email: 'jose_aldo@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',
      phone: '54987876507',
      image: 'a8153f3fgohan.png',
      rating: 1.24,
      active: true,
      createAt: new Date(),
      type: 'P',
      token: 'token_jose',
      chatId: 'chat_id_jose',
      latitude: '-32.6662062',
      longitude: '-15.1219554'
    },
    {
      //id=5
      name: 'paulo',
      nickname: 'Paulo',
      email: 'paulofilomeno@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',//001554
      phone: '51992456738',
      image: 'ca197e14piccolo.jpg',
      rating: 4.54,
      active: true,
      createAt: new Date(),
      type: 'R',
      token: 'token_paulo',
      chatId: 'chat_id_paulo',
      latitude: '-37.4673892',
      longitude: '-48.5698562'
    },
    {
      //id=6
      name: 'moises',
      nickname: 'Moises',
      email: 'moises_de_assis@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',//553366
      phone: '54984045647',
      image: 'ca197e14piccolo.jpg',
      rating: 2.68,
      active: true,
      createAt: new Date(),
      type: 'P',
      token: 'token_moises',
      chatId: 'chat_id_moises',
      latitude: '-33.8795623',
      longitude: '-51.8547963'
    },
    {
      //id=7
      name: 'armelinda',
      nickname: 'Linda',
      email: 'armelinda.jacinto@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',//896347
      phone: '51987043456',
      image: 'ca197e14piccolo.jpg',
      rating: 3.92,
      active: true,
      createAt: new Date(),
      type: 'P',
      token: 'token_linda',
      chatId: 'chat_id_linda',
      latitude: '-33.4257892',
      longitude: '-49.3569852'
    },
    {
      //id=8
      name: 'jacks',
      nickname: 'Jacks',
      email: 'jacks_garcia@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',//142356
      phone: '51993564839',
      image: 'd9abc406broly.jpg',
      rating: 4.36,
      active: true,
      createAt: new Date(),
      type: 'R',
      token: 'token_jacks',
      chatId: 'chat_id_jacks',
      latitude: '-31.5489632',
      longitude: '-50.7489542'
    },
    {
      //id=9
      name: 'fortunato',
      nickname: 'Fortunato',
      email: 'fortuna_maia@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',//908769
      phone: '54983245567',
      image: 'public/user_id',
      rating: 1.98,
      active: true,
      createAt: new Date(),
      type: 'R',
      token: 'token_fort',
      chatId: 'chat_id_fort',
      latitude: '-30.8546932',
      longitude: '-18.7458954'
    },
    {
      //id=10
      name: 'rachel',
      nickname: 'Rachel',
      email: 'rchl_hayala@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',//453891
      phone: '51978345278',
      image: 'public/user_id',
      rating: 3.28,
      active: true,
      createAt: new Date(),
      type: 'R',
      token: 'token_rachel',
      chatId: 'chat_id_rachel',
      latitude: '-34.7845698',
      longitude: '-52.2356985'
    },
    {
      //id=11
      name: 'rose',
      nickname: 'Rose',
      email: 'roselinda.mariatti@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',//384525
      phone: '51995374628',
      image: 'public/user_id',
      rating: 3.67,
      active: true,
      createAt: new Date(),
      type: 'R',
      token: 'token_rose',
      chatId: 'chat_id_rose',
      latitude: '-31.2548963',
      longitude: '-19.7458124'
    },
    {
      //id=12
      name: 'mauro',
      nickname: 'Mauro',
      email: 'mauro.andrade@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',//080675
      phone: '51991787657',
      image: 'd9abc406broly.jpg',
      rating: 4.08,
      active: true,
      createAt: new Date(),
      type: 'P',
      token: 'token_mauro',
      chatId: 'chat_id_mauro',
      latitude: '-29.8596324',
      longitude: '-14.7456981'
    },
    {
      //id=13
      name: 'adroaldo',
      nickname: 'Aldo',
      email: 'adro_bastos@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',//783195
      phone: '54979465749',
      image: 'd9abc406broly.jpg',
      rating: 1.5,
      active: true,
      createAt: new Date(),
      type: 'P',
      token: 'token_aldo',
      chatId: 'chat_id_aldo',
      latitude: '-35.6896562',
      longitude: '-22.1219554'
    },
    {
      //id=14
      name: 'roberto',
      nickname: 'Beto',
      email: 'beto_barbosa@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',//112255
      phone: '55992786957',
      image: 'd9abc406broly.jpg',
      rating: 3.95,
      active: true,
      createAt: new Date(),
      type: 'P',
      token: 'token_beto',
      chatId: 'chat_id_beto',
      latitude: '-37.6662062',
      longitude: '-29.1219554'
    },
    {
      //id=15
      name: 'gabriela',
      nickname: 'Gabi',
      email: 'gpanani@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',//785964
      phone: '51991597657',
      image: 'public/user_id',
      rating: 4.2,
      active: true,
      createAt: new Date(),
      type: 'R',
      token: 'token_gabi',
      chatId: 'chat_id_gabi',
      latitude: '-34.6662062',
      longitude: '-16.1219554'
    },
    {
      //id=16
      name: 'josnel',
      nickname: 'Josnel',
      email: 'josnel.figueiredo@mail.com',
      password: '05fe7461c607c33229772d402505601016a7d0ea',//334215
      phone: '54998087657',
      image: 'd9abc406broly.jpg',
      rating: 2.9,
      active: true,
      createAt: new Date(),
      type: 'P',
      token: 'token_josnel',
      chatId: 'chat_id_josnel',
      latitude: '-30.6662062',
      longitude: '-48.1219554'
    }], {})
  },
  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('User')
  }
}
