import UserRepository from '../infra/repository/user'
import ProfessionalRepository from '../infra/repository/professional'
import ChatRepository from '../infra/repository/chat'

const userRepository = new UserRepository()
const professionalRepository = new ProfessionalRepository()
const chatRepository = new ChatRepository()

module.exports = (io) => {
  let chatIdHash = {}
  let hashChatId = {}
  let sockets = io.sockets.sockets
  io.sockets.on('connection', (socket) => {

    socket.on('subscribe', (user) => {
      socket.userId = user.id
      chatIdHash[user.id] = socket.id
      hashChatId[socket.id] = user.id

      userRepository.update({ online: true }, { id: user.id })
      socket.broadcast.emit('userConnected', user)

      if (user.type == 'R')
        professionalRepository.findSome({ active: true })
          .then(result => {
            if (result.length > 0)
              socket.emit('refreshOnlineProfessionals', result.map(p => ({
                nickname: p.nickname,
                id: p.id,
                online: p.online
              })))
          }).catch(err => console.log('ocorreu um erro: ' + err.message))

    })

    socket.on('disconnect', () => {
      userRepository.update({ online: false }, { id: socket.userId })
      socket.broadcast.emit('userDisconnected', chatIdHash[socket.id])
    })

    socket.on('sendMessage', (message) => {
      message.origin = hashChatId[socket.id]
      const destinyId = chatIdHash[message.destiny]
      chatRepository.create({
        origin: message.origin,
        destiny: message.destiny,
        description: message.description,
        type: message.type ? message.type : 'T',
        date: new Date()
      }).catch(err => { throw err.message })
      if (destinyId) { sockets[destinyId].emit('receiveMessage', message) }
    })
  })
}
