module.exports = function (app) {
    var controller = app.controllers.users;
    app.post('/users', controller.create);
    app.delete('/users/:user_id', controller.destroy);
}