import sha1 from 'sha1'
import UserRepository from '../repository/user'
import parseUser from '../../helpers/parseUser'
import {
  Requester,
  User
} from '../models'

const toDomain = (entities) => {
  const parse = (entity) => {
    let requester = parseUser(entity.User)
    requester.id = entity.id
    return requester
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

  getAll() {
    return Requester.findAll({ include: [User] })
      .then(result => toDomain(result))
      .catch(error => { throw error })
  }

  getById(id) {
    return Requester.findOne({
      where: { id: id }, include: [User]
    })
      .then(result => toDomain(result))
      .catch(error => error.message)
  }

  findByCredentials(email, password) {
    return Requester.findOne({
      include: [
        { model: User, where: { email: email } }
      ]
    })
      .then(result => {
        return result && result.User.password === sha1(password) ? toDomain(result) : null
      })
      .catch(err => { throw err })
  }

  create(user) {
    return super.create(user)
      .then(id => { return Requester.create({ id: id }) })
      .then(requester => requester.id)
      .catch(err => { throw err })
  }

  update(requester) {

    let user = {}
    if (requester.nickname)
      user.nickname = requester.nickname
    if (requester.name)
      user.name = requester.name
    if (requester.phone)
      user.phone = requester.phone
    if (requester.rating)
      user.rating = requester.rating

    const where = { where: { id: professional.id } }

    return super.update(user, where)
  }
}
