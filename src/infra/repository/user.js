import { User } from '../models'
import exception from '../../helpers/exception'

export default class UserRepository {

	create(user) {
		user.createAt = new Date()
		user.active = true
		return User.findOne({ where: { email: user.email } })
			.then((result) => {
				if (result)
					throw { type: exception.PROPERTY_NOT_SATISFIED, message: 'Email já cadastrado.' }
				return User.create(user)
					.then(user => user.id)
					.catch(err => { throw err })
			}).catch(err => { throw err })
	}

	update(user) {
		user.updateAt = new Date()
		return User.update(user, { where: { id: user.id } })
			.then(result => result)
			.catch(err => {
				err.message = 'userRepository.update() => ' + err.message
				throw err
			})
	}
}
