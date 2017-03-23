module.exports = function(app){
    var auth = require('../middleware/authentication');
    var controller = app.controllers.comment;
     app.get('/comments', controller.getAll);
    // app.get('/comment/:id', auth, controller.show);
    // app.post('/comment', controller.create);
    // app.get('/comment/:id/edit', auth, controller.edit);
    // app.put('/comment/:id', auth, controller.update);
    // app.delete('/comment/:id', auth, controller.destroy);
}