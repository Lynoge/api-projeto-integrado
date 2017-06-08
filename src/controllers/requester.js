import HttpStatus from 'http-status'

import Repository from '../infra/repository/requester'
import BaseController from '../controllers/baseController'
import handlerError from '../helpers/handlerError'

const repository = new Repository();

export default class Controller extends BaseController {

	getAll(req, res) {
		const { query } = req
		repository.getAll()
			.then(requesters => {
				if (requesters.length == 0)
					res.status(HttpStatus.NO_CONTENT)
				res.json(requesters)
			})
			.catch(err => { handlerError(res, err) })
	}

	getById(req, res) {
		const { id } = req.params
		repository.getById(id)
			.then(requester => {
				if (!requester)
					res.status(HttpStatus.NOT_FOUND)
				res.json(requester)
			})
			.catch(err => { handlerError(res, err) })
	}

	create(req, res) {
		const user = req.body
		repository.create(user)
			.then(id => {
				res.status(HttpStatus.CREATED)
				res.json(id)
			})
			.catch(err => { handlerError(res, err) })
	}

	update(req, res) {
		const user = req.body
		repository.update(user)
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
