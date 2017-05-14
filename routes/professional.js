module.exports = function (app) {
  const controller = app.controllers.professional
  app.get('/professional', controller.getAll)
  app.get('/professional/:id', controller.getById)
  app.post('/professional', controller.create)  
  app.put('/professional', controller.update)
  app.delete('/professional/:id', controller.delete)
}
