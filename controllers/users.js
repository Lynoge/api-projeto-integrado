import models from '../models'

module.exports = function (app) {
  const userController = {
    create (req, res) {
      models.User.create({
        username: req.body.username
      }).then(function () {
        res.redirect('/')
      }).catch((error) => {
        res.end()
      })
    },
    destroy (req, res) {
      models.User.destroy({
        where: {
          id: req.params.user_id
        }
      }).then(() => {
        res.redirect('/')
      }).catch(() => {
        res.end()
      })
    }
  }

  return userController
}
