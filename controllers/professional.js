import HttpStatus from 'http-status'

import {
  defaultResponse,
  errorResponse
} from '../helpers/http'

import Repository from '../repository/professional'
import { Professional } from '../models'

module.exports = function (app) {
  const repository = new Repository()

  const ProfessionalController = {
    getAll (req, res) {
      const { query: {
        name,
        profission
      }} = req

      if (name || profission) {
        return repository.findByNameAndProfission(name, profission).then(users => users)
      } else {
        return repository.getAll().then(users => users)
      }
    },
    findById (params) {
      if (!params) { return null }

      return repository.findById(params)
        .then(users => users)
        .catch((e) => e)
    },
    create (data) {
      return Professional.create(data)
        .then(result => defaultResponse(result, HttpStatus.CREATED))
        .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY))
    },
    update (data, params) {
      return Professional.update(data, {where: params})
        .then(result => defaultResponse(result))
        .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY))
    },
    delete (params) {
      return Professional.destroy({where: params})
        .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
        .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY))
    }
  }

  return ProfessionalController
}
