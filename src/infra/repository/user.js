import sha1 from 'sha1'
import { User } from '../models'
import exception from '../../helpers/exception'
import parseUser from '../../helpers/parseUser'

export default class UserRepository {

	create(user) {
		user.createAt = new Date()
		user.active = true
		user.chatId = sha1(user.createAt)
		user.password = sha1(user.password)
		return User.findOne({ where: { email: user.email } })
			.then((result) => {
				if (result)
					throw { type: exception.PROPERTY_NOT_SATISFIED, message: 'Email já cadastrado.' }
				return User.create(user)
					.then(user => user.id)
					.catch(err => { throw err })
			}).catch(err => { throw err })
	}

	update(user, where) {
		user.updateAt = new Date()
		where = where ? where : { id: user.id }
		return User.update(user, { where: where })
			.then(result => result)
			.catch(err => {
				console.log(err)
				throw err
			})
	}

	findByToken(token) {
		return User.findOne({ where: { token: token } })
			.then(result => result ? parseUser(result) : null)
			.catch(err => {
				err.message = 'UserRepository.findByToken() => ' + err.message
				throw err
			})
	}

	validatePasswordChange(token, password){
		return User.findOne({ where: { token: token } })
			.then(result => password == result.password)
			.catch(err => {
				err.message = 'UserRepository.validatePasswordChange() => ' + err.message
				throw err
			})
	}
}
