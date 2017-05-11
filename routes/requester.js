module.exports = function (app) {
  const controller = app.controllers.requester
  app.get('/requester', controller.getAll)
  app.get('/requester/:id', controller.getById)
  app.post('/requester', controller.create)
  app.delete('/requester/:id', controller.remove)
}
