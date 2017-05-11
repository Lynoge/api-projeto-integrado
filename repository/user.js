import { User } from '../models'

const toDomain = (entities) => {
	const parse = (entity) => {
		return {
			id: entity.id,
			name: entity.name,
			username: entity.username,
			email: entity.email,
			phone: entity.phone,
			active: entity.active,
			createAt: entity.createAt,
			updateAt: entity.updateAt,
			type: entity.type,
			image: entity.image
		}
	}

	if (!entities) { return null }
	if (Array.isArray(entities)) {
		return entities
			.map(entity => (parse(entity)))
	} else {
		return parse(entities)
	}
}

export default class UserRepository {

	/**
	 * @param params for find users
	 */
	getSome(params) {
		return User.findAll(params)
			.then(result => toDomain(result))
			.catch(error => error)
	}

	add(user, transaction) {
		return User.create(user)
			.then(user => user.id)
			.catch(err => {
				err.message = 'userRepository.add() => ' + err.message
				throw err
			})
	}

	remove(id) {
		return User.destroy({ where: { id: id } })
			.catch(err => {
				err.message = 'userRepository.remove() => ' + err.message
				throw err
			})
	}
}
