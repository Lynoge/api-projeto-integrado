import HttpStatus from 'http-status'

import Repository from '../infra/repository/visit'
import exception from '../helpers/exception'
import validate from '../helpers/validation/visit'

const repository = new Repository();

export default class Controller {

	getAll(req, res) {
		repository.getAll()
			.then(visits => {
				if (visits.length == 0)
					res.status(HttpStatus.NO_CONTENT)
				res.json(requesters)
			})
			.catch(err => { exception.httpHandler(res, err) })
	}

	getById(req, res) {
		const { id } = req.params
		repository.getById(id)
			.then(visit => {
				if (!visit)
					res.status(HttpStatus.NOT_FOUND)
				res.json(visit)
			})
			.catch(err => { exception.httpHandler(res, err) })
	}

	update(req, res) {
		const visit = req.body
		repository.update(visit)
			.then(result => res.json(result))
			.catch(err => { exception.httpHandler(res, err) })
	}

	create(req, res) {
		const visit = req.body
		try {
			validate(visit)
			repository.create(visit)
				.then(result => res.json(result))
				.catch(err => { exception.httpHandler(res, err) })
		} catch (err) { exception.httpHandler(res, err) }
	}
}
