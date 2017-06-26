import { User } from '../models'
import exception from '../../helpers/exception'
import sha1 from 'sha1'

export default class UserRepository {

	create(user) {
		user.createAt = new Date()
		user.active = true
		user.chatId = sha1(user.createAt)
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
			.catch(err => { throw err })
	}
}
