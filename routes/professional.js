module.exports = function (app) {
    // var auth = require('../middleware/authentication');
  var controller = app.controllers.professional
  app.get('/professionals', controller.getAll)
  app.get('/professional/:id', controller.getById)
    // app.post('/professional', controller.create);
    // app.get('/professional/:id/edit', auth, controller.edit);
    // app.put('/professinal/:id', auth, controller.update);
    // app.delete('/professional/:id', auth, controller.remove);
}
