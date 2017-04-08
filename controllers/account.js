module.exports = function(app){
    var UserController = {
        login: function (req, res) {
            console.log(req.params);
            res.end();
        },
        logout: function (req, res) {
            req.session.destroy();
            res.redirect('/');
        }
    };
    return UserController;
}