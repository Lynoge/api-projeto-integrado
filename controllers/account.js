import sha1 from 'sha1'
import Repository from '../dao/repository/professionalRepository'

module.exports = function (app) {
  var repository = new Repository()
  var accountController = {
    login: function (req, res) {
      console.log(req.params)
      res.end()
    },

    logout: function (req, res) {
      req.session.destroy()
      res.redirect('/')
    },

    professionalToken: function (req, res) {
      res.setHeader('Content-Type', 'application/json')

      var name = req.body.name
      var password = req.body.password

      if (name && password) {
        repository.findByCredentials(name, password)
          .then((result) => {
            if (result.professionalId > 0) {
              var user = {}
              user.token = sha1(name + (new Date()).toString())
              user.logged = true
              user.name = name
              res.send(JSON.stringify(user))
            } else {
              res.send(JSON.stringify({ error: 'Invalid credentials' }))
            }
          }).catch((ex) => {
            console.log(ex)
            res.send(JSON.stringify({ error: 'Invalid credentials' }))
          });
      } else {
        res.send(JSON.stringify({ error: 'Invalid credentials' }))
      }
    },

    userToken: function (req, res) {
      console.log(req.body)
      res.end()
    }
  }
  return accountController
}
