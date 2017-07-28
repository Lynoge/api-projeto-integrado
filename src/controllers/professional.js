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

  getByProfission(req, res) {
    const { profission } = req.params
    repository.findByProfission(profission)
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
    if (req.user.type != 'P') {
      exception.httpHandler(res, { message: 'Deve ser um profissional.', type: exception.UNAUTHORIZED })
      return
    }
    req.body.id = req.user.id
    repository.update(req.body)
      .then(result => res.json(result))
      .catch(err => { exception.httpHandler(res, err) })
  }

  addProfission(req, res) {
    const { id } = req.params
    if (req.user.type != 'P') {
      exception.httpHandler(res, { message: 'Deve ser um profissional.', type: exception.UNAUTHORIZED })
      return
    }

    repository.addProfission(req.user.id, id)
      .then(result => res.json(result))
      .catch(err => {
        if (err.name == 'SequelizeUniqueConstraintError')
          exception.httpHandler(res, { message: 'Já incluso na profissão.', type: exception.PROPERTY_NOT_SATISFIED })
        else if (err.name == 'SequelizeForeignKeyConstraintError')
          exception.httpHandler(res, { message: 'Profissão ou profissional inválido.', type: exception.PROPERTY_NOT_SATISFIED })
        else
          exception.httpHandler(res, err)
      })
  }

  removeProfission(req, res) {
    const { id } = req.params

    repository.removeProfission(req.user.id, id)
      .then(result => res.json(result))
      .catch(err => { exception.httpHandler(res, err) })
  }
}