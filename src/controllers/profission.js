import HttpStatus from 'http-status'

import ProfissionRepository from '../infra/repository/profission'
import handlerError from '../helpers/handlerError'

const repository = new ProfissionRepository()

export default class ProfissionalController {
    getAll(req, res) {
        return repository.getAll()
            .then(result => res.json(result))
            .catch(err => { handlerError(res, err) })
    }

    getById(req, res) {
        const { id } = req.params
        return repository.findById(id)
            .then(result => res.json(result))
            .catch(err => { handlerError(res, err) })
    }

    create(req, res){
        
    }

    update(req, res){
        
    }

    delete(req, res){
        
    }
}