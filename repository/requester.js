import UserRepository from '../repository/user'
import {
  Requester,
  User
} from '../models'

const toDomain = (entities) => {
  const parse = (entity) => {
    return {
      id: entity.id,
      name: entity.User.name,
      username: entity.User.username,
      email: entity.User.email,
      phone: entity.User.phone,
      active: entity.User.active,
      createAt: entity.User.createAt,
      updateAt: entity.User.updateAt,
      type: entity.User.type,
      image: entity.User.image
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

export default class RequesterRepository extends UserRepository {
  /**
   * @param obj resposta
   */
  getAll() {
    return Requester.findAll({ include: [User] })
      .then(result => toDomain(result))
      .catch(error => {
        error.message = 'requesterRepository.getAll() => ' + error.message
        throw error
      })
  }

  findById(id) {
    return Requester.findAll({
      where: { id: id }, include: [User]
    })
      .then(result => toDomain(result))
      .catch(error => error.message)
  }

  findByCredentials(name, password) {
    return Requester.findOne({ where: { name: name, password: password } })
      .then(result => toDomain(result))
      .catch(error => error)
  }

  add(user) {
    return super.add(user)
      .then(id => { return Requester.create({ id: id }) })
      .then(requester => requester.id)
      .catch(err => {
        err.message = 'RequesterRepository.add() => ' + err.message
        throw err
      })
  }

  remove(id) {
    return Requester.destroy({ where: { id: id } })
      .then(() => {
        return super.remove(id)
      })
      .catch(err => {
        err.message = 'RequesterRepository.remove() => ' + err.message
        throw err
      })
  }
}
