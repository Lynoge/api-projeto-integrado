module.exports = function (app) {
  console.log('token')
  var controller = app.controllers.account
  app.post('/token', controller.professionalToken)
}
