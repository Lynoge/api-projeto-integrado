import Repository from '../repository/requester'
import {
	defaultResponse,
	errorResponse
} from '../helpers/http'

module.exports = function (app) {
	const repository = new Repository();
	const RequesterController = {
		getAll(req, res) {
			const { query } = req
			repository.getAll()
				.then(requester => {
					res.json(defaultResponse(requester))
				})
				.catch(err => {
					res.json(errorResponse(err.message))
				})
		},
		getById(req, res) {
			const { id } = req.params
			repository.getById(id)
				.then(requester => {
					res.json(defaultResponse(requester))
				})
				.catch(err => {
					res.json(errorResponse(err.message))
				})
		},
		create(req, res) {
			const user = req.body
			repository.add(user)
				.then(id => {
					res.json(defaultResponse(id))
				})
				.catch(err => {
					res.json(errorResponse(err.message))
				})
		},
		update(req, res) {
			const user = req.body
			repository. update(user)
		},
		delete(req, res) {
			const { id } = req.params
			repository.delete(id).then(() => {
				res.json(defaultResponse(id))
			}).catch(err => {
				res.json(errorResponse(err.message))
			})
		}
	}
	return RequesterController
}
