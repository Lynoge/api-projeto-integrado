import Repository from '../dao/repository/professionalRepository'

module.exports = function (app) {
  var repository = new Repository()

  var ProfessionalController = {
    getAll: function (req, res) {
      var name = req.query.name
      var profission = req.query.profission
      if (name || profission) {
        repository.findByNameAndProfission(name, profission).then(users => {
          res.setHeader('Content-Type', 'application/json')
          res.send(JSON.stringify(users))
        })
      } else {
        repository.getAll().then(users => {
          res.setHeader('Content-Type', 'application/json')
          res.send(JSON.stringify(users))
        })
      }
    },
    getById: function (req, res) {
      const id = req.params.id

      if (id) {
        repository.findById(id)
          .then(users => {
            res.setHeader('Content-Type', 'application/json')
            res.send(JSON.stringify(users))
          })
          .catch(() => {
            res.setHeader('Content-Type', 'application/json')
            res.send(JSON.stringify({ error: 'User not found' }))
          })
      } else {
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify({ error: 'User not found' }))
      }
    },
    create: function (req, res) {

    },
    remove: function (req, res) {

    }
  }
  return ProfessionalController
}
