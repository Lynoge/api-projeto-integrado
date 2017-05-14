import HttpStatus from 'http-status'
import {
  defaultResponse,
  errorResponse
} from '../helpers/http'

import Repository from '../repository/professional'

module.exports = function (app) {
  const repository = new Repository()

  const ProfessionalController = {
    getAll(req, res) {
      const { query: {
        name,
        profission
      } } = req

      if (name || profission) {
        repository.findByNameAndProfission(name, profission)
          .then(users => res.json(defaultResponse(users)))
          .catch(err => res.json(errorResponse(err)))
      } else {
        repository.getAll()
          .then(users => res.json(defaultResponse(users)))
          .catch(err => res.json(errorResponse(err)))
      }
    },
    getById(req, res) {
      const { id } = req.params

      repository.getById(id)
        .then(user => res.json(defaultResponse(user)))
        .catch(err => res.json(errorResponse(err)))
    },
    create(req, res) {
      repository.create(req.body)
        .then(result => res.json(defaultResponse(result, HttpStatus.CREATED)))
        .catch(error => res.json(errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY)))
    },
    update(req, res) {
      repository.update(req.body)
        .then(result => res.json(defaultResponse(result)))
        .catch(error => res.json(errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY)))
    },
    delete(req, res) {
      const { id } = req.params
      console.log(id)
      repository.delete(id)
        .then(result => res.json(defaultResponse(result, HttpStatus.NO_CONTENT)))
        .catch(error => res.json(errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY)))
    }
  }

  return ProfessionalController
}
