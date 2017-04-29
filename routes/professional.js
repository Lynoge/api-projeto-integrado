module.exports = function (app) {
  const controller = app.controllers.professional
  app.get('/professionals', controller.getAll)
  app.get('/professional/:id', controller.getById)
}
