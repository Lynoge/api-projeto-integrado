import HttpStatus from 'http-status'

import Repository from '../infra/repository/professional'
import exception from '../helpers/exception'

const repository = new Repository()

export default class Controller {

  getAll(req, res) {
    repository.getAll()
      .then(users => {
        if (users.length == 0)
          res.status(HttpStatus.NO_CONTENT)
        res.json(users)
      })
      .catch(err => { exception.httpHandler(res, err) })
  }

  getByNameAndProfission(req, res) {
    const { name, profissionId } = req.params
    repository.findByNameAndProfission(name, profissionId)
      .then(users => {
        if (users.length == 0)
          res.status(HttpStatus.NO_CONTENT)
        res.json(users)
      })
      .catch(err => { exception.httpHandler(res, err) })
  }

  getByProfission(req, res) {
    const { profissionId } = req.params
    repository.findByProfission(profissionId)
      .then(users => {
        if (users.length == 0)
          res.status(HttpStatus.NO_CONTENT)
        res.json(users)
      })
      .catch(err => { exception.httpHandler(res, err) })
  }

  getById(req, res) {
    const { id } = req.params
    repository.getById(id)
      .then(user => {
        if (!user)
          res.status(HttpStatus.NOT_FOUND)
        res.json(user)
      })
      .catch(err => { exception.httpHandler(res, err) })
  }

  update(req, res) {
    repository.update(req.body)
      .then(result => res.json(result))
      .catch(err => { exception.httpHandler(res, err) })
  }
}