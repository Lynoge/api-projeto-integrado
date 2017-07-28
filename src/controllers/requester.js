import HttpStatus from 'http-status'

import Repository from '../infra/repository/requester'
import exception from '../helpers/exception'

const repository = new Repository();

export default class Controller {

	getAll(req, res) {
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
		if (req.user.type != 'R') {
			exception.httpHandler(res, { message: 'Deve ser um cliente.', type: exception.UNAUTHORIZED })
			return
		}
		req.body.id = req.user.id
		repository.update(req.body)
			.then(result => res.json(result))
			.catch(err => { exception.httpHandler(res, err) })
	}
}
