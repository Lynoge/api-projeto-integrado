import HttpStatus from 'http-status'

import Repository from '../infra/repository/visit'
import exception from '../helpers/exception'
import validate from '../helpers/validation/visit'

const toDomain = (visit) => {

}

const repository = new Repository();

export default class Controller {

	getAll(req, res) {
		let where = {}
		if (req.user.type == 'P')
			where = { professionalId: req.user.id }
		else
			where = { requesterId: req.user.id }
		repository.findSome(where)
			.then(visits => {
				if (visits.length == 0)
					res.status(HttpStatus.NO_CONTENT)
				res.json(visits)
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
			if (req.user.type !== 'R')
				throw { message: 'Requester inválido.', type: exception.UNAUTHORIZED }
			visit.requesterId = req.user.id
			repository.create(visit)
				.then(result => res.json(result))
				.catch(err => {
					if (err.message.indexOf('Visit_professionalId_fkey') != -1)
						err = { message: 'Profissional inválido.', type: exception.PROPERTY_NOT_SATISFIED }
					exception.httpHandler(res, err)
				})
		} catch (err) { exception.httpHandler(res, err) }
	}
}
