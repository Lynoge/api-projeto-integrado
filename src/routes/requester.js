import requesterController from '../controllers/requester'

const controller = new requesterController()

module.exports = function (app) {
  app.get('/requester', controller.getAll)
  app.get('/requester/:id', controller.getById)
  app.post('/requester', controller.create)
  app.put('/requester', controller.update)
  app.delete('/requester/:id', controller.delete)
}
