module.exports = function (app) {
  const controller = app.controllers.account
  app.post('/token', controller.professionalToken)
}