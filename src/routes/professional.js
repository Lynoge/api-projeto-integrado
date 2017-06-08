import professionalController from '../controllers/professional'

const controller = new professionalController()

module.exports = function (app) {
  app.get('/professional', controller.getAll)
  app.get('/professional/:id', controller.getById)
  app.get('/professional/:name/:profissionId', controller.getByNameAndProfission)
  app.post('/professional', controller.create)  
  app.put('/professional', controller.update)
  app.delete('/professional/:id', controller.delete)
}
