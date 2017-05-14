import { User } from '../models'

export default class UserRepository {

	create(user, transaction) {
		return User.create(user)
			.then(user => user.id)
			.catch(err => {
				err.message = 'userRepository.add() => ' + err.message
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
