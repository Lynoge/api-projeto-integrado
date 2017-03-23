module.exports = function(app){
    var auth = require('../middleware/authentication');
    var char = app.controllers.chat;
    app.get('/chat', auth, char.index);
}