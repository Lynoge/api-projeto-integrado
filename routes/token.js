module.exports = function(app){
    console.log('token');
    var controller = app.controllers.account;
    app.post('/professional/token', controller.professionalToken);
    app.post('/user/token', controller.userToken);
}