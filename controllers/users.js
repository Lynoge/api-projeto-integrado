var models = require('../dao/models');
module.exports = function (app) {
    var userController = {
        create: function (req, res) {
            models.User.create({
                username: req.body.username
            }).then(function () {
                res.redirect('/');
            }).catch((error) => {
                res.end();
            });
        },
        destroy: function (req, res) {            
            models.User.destroy({
                where: {
                    id: req.params.user_id
                }
            }).then(() => {
                res.redirect('/');
            }).catch(() => {
                res.end();
            })
        }
    };
    return userController;
}