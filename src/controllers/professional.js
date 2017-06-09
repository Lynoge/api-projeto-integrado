import HttpStatus from 'http-status'

import Repository from '../infra/repository/professional'
import BaseController from '../controllers/baseController'
import handlerError from '../helpers/handlerError'

const repository = new Repository()

export default class Controller extends BaseController {

  getAll(req, res) {
    repository.getAll()
      .then(users => {
        if (users.length == 0)
          res.status(HttpStatus.NO_CONTENT)
        res.json(users)
      })
      .catch(err => { handlerError(res, err) })
  }

  getByNameAndProfission(req, res) {
    const { name, profissionId } = req.params
    repository.findByNameAndProfission(name, profissionId)
      .then(users => {
        if (users.length == 0)
          res.status(HttpStatus.NO_CONTENT)
        res.json(users)
      })
      .catch(err => { handlerError(res, err) })
  }

  getByProfission(req, res) {
    const { profissionId } = req.params
    repository.findByProfission(profissionId)
      .then(users => {
        if (users.length == 0)
          res.status(HttpStatus.NO_CONTENT)
        res.json(users)
      })
      .catch(err => { handlerError(res, err) })
  }

  getById(req, res) {
    const { id } = req.params
    repository.getById(id)
      .then(user => {
        if (!user)
          res.status(HttpStatus.NOT_FOUND)
        res.json(user)
      })
      .catch(err => { handlerError(res, err) })
  }

  create(req, res) {
    repository.create(req.body)
      .then(result => {
        res.status(HttpStatus.CREATED)
        res.json(result)
      })
      .catch(err => { handlerError(res, err) })
  }

  update(req, res) {
    repository.update(req.body)
      .then(result => res.json(result))
      .catch(err => { handlerError(res, err) })
  }

  delete(req, res) {
    const { id } = req.params
    repository.delete(id)
      .then(result => {
        res.status(HttpStatus.NO_CONTENT)
        res.json(result)
      })
      .catch(err => { handlerError(res, err) })
  }
}