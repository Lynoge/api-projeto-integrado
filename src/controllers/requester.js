import HttpStatus from 'http-status'

import Repository from '../infra/repository/requester'
import exception from '../helpers/exception'

const repository = new Repository();

export default class Controller {

	getAll(req, res) {
		const { query } = req
		repository.getAll()
			.then(requesters => {
				if (requesters.length == 0)
					res.status(HttpStatus.NO_CONTENT)
				res.json(requesters)
			})
			.catch(err => { exception.httpHandler(res, err) })
	}

	getById(req, res) {
		const { id } = req.params
		repository.getById(id)
			.then(requester => {
				if (!requester)
					res.status(HttpStatus.NOT_FOUND)
				res.json(requester)
			})
			.catch(err => { exception.httpHandler(res, err) })
	}

	update(req, res) {
		const user = req.body
		repository.update(user)
			.then(result => res.json(result))
			.catch(err => { exception.httpHandler(res, err) })
	}
}
