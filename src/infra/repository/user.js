import { User } from '../models'

export default class UserRepository {

	create(user, transaction) {
		user.createAt = new Date()
		user.active = true
		return User.create(user)
			.then(user => user.id)
			.catch(err => {
				err.message = 'userRepository.create() => ' + err.message
				throw err
			})
	}

	update(user, transaction) {
		user.updateAt = new Date()
		return User.update(user, { where: { id: user.id } })
			.then(result => result)
			.catch(err => {
				err.message = 'userRepository.update() => ' + err.message
				throw err
			})
	}

	delete(id) {
		return User.destroy({ where: { id: id } })
			.catch(err => {
				err.message = 'userRepository.remove() => ' + err.message
				throw err
			})
	}
}
