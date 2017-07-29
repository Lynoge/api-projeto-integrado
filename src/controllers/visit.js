import HttpStatus from 'http-status'

import VisitRepository from '../infra/repository/visit'
import exception from '../helpers/exception'
import validate from '../helpers/validation/visit'
import UserRepository from '../infra/repository/user'

const media = (array) => {
	if (!Array.isArray(array))
		return 0
	let sum = 0
	let count = 0
	for (let i = 0; i < array.length; i++)
		if (!isNaN(array[i])) {
			sum += array[i]
			count++
		}
	return sum / count
}

const repository = new VisitRepository();

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

	rate(req, res) {
		const { id, rating } = req.body
		if (!rating || (rating < 0 || rating > 5)) {
			exception.httpHandler(res, { message: 'A avaliação deve ser de 0 à 5.', type: exception.PROPERTY_NOT_SATISFIED })
			return
		}
		const isProfessional = req.user.type == 'P'

		repository.getById(id).then(result => {
			if (!result)
				throw { message: "Visita não encontrada!", type: exception.NOT_FOUND }

			if ((isProfessional && result.professionalId != req.user.id)
				|| (!isProfessional && result.requesterId != req.user.id))
				throw { message: "Não pode avaliar esta visita!", type: exception.UNAUTHORIZED }

			return repository.update(
				isProfessional ? { ratingRequester: rating } : { ratingProfessional: rating },
				{ id: id }
			).then(() => {
				const userRepository = new UserRepository()
				return userRepository.updateRating(
					isProfessional ? result.requesterId : result.professionalId,
					!isProfessional
				).then(re => res.json({ message: 'Avaliado com sucesso!' }))
			})
		}).catch(err => exception.httpHandler(res, err))
	}

	status(req, res) {
		const { id, status } = req.body
		console.log(req.body)
		if (status != "PENDENTE" && status != "EM ANDAMENTO" && status != "CONCLUIDO")
			exception.httpHandler(res, { message: 'Status inválido', type: exception.PROPERTY_NOT_SATISFIED })

		repository.getById(id).then(result => {
			if (!result)
				throw { message: "Visita não encontrada!", type: exception.NOT_FOUND }
			repository.update({ status: status }, { id: id })
				.then(res.json({ message: 'Avaliado com sucesso!' }))
		}).catch(err => exception.httpHandler(res, err))
	}
}