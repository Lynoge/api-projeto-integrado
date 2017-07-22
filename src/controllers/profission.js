import HttpStatus from 'http-status'

import ProfissionRepository from '../infra/repository/profission'
import exception from '../helpers/exception'

const repository = new ProfissionRepository()

export default class ProfissionalController {
    getAll(req, res) {
        return repository.getAll()
            .then(result => res.json(result))
            .catch(err => { exception.httpHandler(res, err) })
    }

    getById(req, res) {
        const { id } = req.params
        return repository.findById(id)
            .then(result => res.json(result))
            .catch(err => { exception.httpHandler(res, err) })
    }

    create(req, res) {
        const { name } = req.body
        return repository.create(name)
            .then(result => {
                res.status(HttpStatus.CREATED)
                res.json(result)
            })
            .catch(err => { exception.httpHandler(res, err) })
    }

    delete(req, res) {
        const { id } = req.params
        return repository.delete(id)
            .then(result => res.json(result))
            .catch(err => { exception.httpHandler(res, err) })
    }
}