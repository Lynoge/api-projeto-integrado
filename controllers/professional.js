import HttpStatus from 'http-status'
import Repository from '../repository/professional'

module.exports = function (app) {
  const repository = new Repository()

  const ProfessionalController = {
    getAll(req, res) {
      repository.getAll()
        .then(users => {
          if (users.length == 0)
            res.status(HttpStatus.NO_CONTENT)
          res.json(users)
        })
        .catch(err => {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR)
          res.json(err.message)
        })
    },

    getByNameAndProfission(req, res) {
      const { name, profissionId } = req.params
      repository.findByNameAndProfission(name, profissionId)
        .then(users => {
          if (users.length == 0)
            res.status(HttpStatus.NO_CONTENT)
          res.json(users)
        })
        .catch(err => {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR)
          res.json(err.message)
        })
    },

    getById(req, res) {
      const { id } = req.params
      repository.getById(id)
        .then(user => {
          if (!user)
            res.status(HttpStatus.NOT_FOUND)
          res.json(user)
        })
        .catch(err => {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR)
          res.json(err.message)
        })
    },

    create(req, res) {
      repository.create(req.body)
        .then(result => {
          res.status(HttpStatus.CREATED)
          res.json(result)
        })
        .catch(err => {
          console.log(err.message)
          res.status(HttpStatus.UNPROCESSABLE_ENTITY)
          res.json(err.message)
        })
    },

    update(req, res) {
      repository.update(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(HttpStatus.UNPROCESSABLE_ENTITY)
          res.json(error.message)
        })
    },

    delete(req, res) {
      const { id } = req.params
      repository.delete(id)
        .then(result => {
          res.status(HttpStatus.NO_CONTENT)
          res.json(result)
        })
        .catch(error => {
          res.status(HttpStatus.UNPROCESSABLE_ENTITY)
          res.json(error.message)
        })
    }
  }

  return ProfessionalController
}
