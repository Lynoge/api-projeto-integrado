module.exports = function (app) {
  const controller = app.controllers.comment
  app.get('/comments', controller.getAll)
}
