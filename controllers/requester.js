import HttpStatus from 'http-status'
import Repository from '../repository/requester'

module.exports = function (app) {
	const repository = new Repository();
	const RequesterController = {
		getAll(req, res) {
			const { query } = req
			repository.getAll()
				.then(requesters => {
					if (requesters.length == 0)
						res.status(HttpStatus.NO_CONTENT)
					res.json(requesters)
				})
				.catch(err => {
					res.status(HttpStatus.INTERNAL_SERVER_ERROR)
					res.json(err.message)
				})
		},
		getById(req, res) {
			const { id } = req.params
			repository.getById(id)
				.then(requester => {
					if (!requester)
						res.status(HttpStatus.NOT_FOUND)
					res.json(requester)
				})
				.catch(err => {
					res.json(err.message)
				})
		},
		create(req, res) {
			const user = req.body
			repository.create(user)
				.then(id => {
					res.status(HttpStatus.CREATED)
					res.json(id)
				})
				.catch(err => {
					res.status(HttpStatus.UNPROCESSABLE_ENTITY)
					res.json(err.message)
				})
		},
		update(req, res) {
			const user = req.body
			repository.update(user)
				.then(result => res.json(result))
				.catch(err => {
					res.status(HttpStatus.UNPROCESSABLE_ENTITY)
					res.json(err.message)
				})
		},
		delete(req, res) {
			const { id } = req.params
			repository.delete(id)
				.then(result => {
					res.status(HttpStatus.NO_CONTENT)
					res.json(result)
				})
				.catch(err => {
					res.status(HttpStatus.UNPROCESSABLE_ENTITY)
					res.json(err.message)
				})
		}
	}
	return RequesterController
}
