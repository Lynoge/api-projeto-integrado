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
      image: 'public/user_id',
      rating: 4.8,
      active: true,
      createAt: new Date(),
      type: 'P',
      token: 'token_raimundo',
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
      image: 'public/user_id',
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
      password: '16151edda26b77063e5ddd268e19ab3f058df3ba',//001554
      phone: '51992456738',
      image: 'public/user_id',
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
      password: 'f48ff158fb68e693699cc80594a9b14fbbab7680',//553366
      phone: '54984045647',
      image: 'public/user_id',
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
      password: '8e331d7c833a7759eac756423e30077651a35302',//896347
      phone: '51987043456',
      image: 'public/user_id',
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
      password: '41b7e189e41bd2cb4a3995b383730bfb7bfb5399',//142356
      phone: '51993564839',
      image: 'public/user_id',
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
      password: '6a43a2d97e4b13506ee0f8c3f49abdf67c34d555',//908769
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
      password: '59437bc91a5a80071c7900b7b5f4c61f32ff1edb',//453891
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
      password: 'a5289c32213d0822d28010ecb0c9eb606adba38c',//384525
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
      password: '462ad6771af41dbeafd35411f581d5588b32b553',//080675
      phone: '51991787657',
      image: 'public/user_id',
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
      password: '0a12b87b4d048562175263824475e1242025a2de',//783195
      phone: '54979465749',
      image: 'public/user_id',
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
      password: 'fc8e1491881d5a6a9c929d6333f0dc22fbfcd2ed',//112255
      phone: '55992786957',
      image: 'public/user_id',
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
      password: '8af3be2d6c01bec662b6285a26218bfbd6c62c1c',//785964
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
      password: 'fb52189e3355adb58915643006be7c59e51bdff6',//334215
      phone: '54998087657',
      image: 'public/user_id',
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
