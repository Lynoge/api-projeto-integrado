import sha1 from 'sha1'

module.exports = function (app) {
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
      var name = req.body.name
      var password = req.body.password
      var user = null
      if (name) {
        var user = {}
        user.token = sha1(name)
        user.logged = true
        user.name = name
      }
      res.send(JSON.stringify(user))
    },
    userToken: function (req, res) {
      console.log(req.body)
      res.end()
    }
  }
  return accountController
}
