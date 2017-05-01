import Repository from '../repository/professional'

module.exports = function (app) {
  const repository = new Repository()

  const ProfessionalController = {
    getAll (req, res) {
      const name = req.query.name
      const profission = req.query.profission

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
    getById (req, res) {
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
    }
  }

  return ProfessionalController
}
