import UserRepository from './user'
import {
  Professional,
  Profission,
  User
} from '../models'

const toDomain = (entities) => {
  const parse = (entity) => {
    return {
      id: entity.id,
      name: entity.User.name,
      nickname: entity.User.nickname,
      email: entity.User.email,
      phone: entity.User.phone,
      active: entity.User.active,
      createAt: entity.User.createAt,
      updateAt: entity.User.updateAt,
      type: entity.User.type,
      profission: entity.Profission,
      description: entity.description,
      image: entity.User.image,
      chatId: entity.User.chatId,
      rating: entity.User.rating
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

export default class professionalRepository extends UserRepository {
  getAll() {
    return Professional.findAll({ include: [User, Profission] })
      .then(result => { return toDomain(result) })
      .catch(err => { throw err })
  }

  findByNameAndProfission(name, profissionId) {
    name = name || ''
    profissionId = isNaN(profissionId) ? 0 : profissionId
    return Professional.findAll({
      include: [
        { model: Profission, where: { id: profissionId } },
        { model: User, where: { name: { $iLike: '%' + name + '%' } } }
      ]
    })
      .then(result => toDomain(result))
      .catch(err => { throw err })
  }

  findByProfission(profissionId) {
    profissionId = isNaN(profissionId) ? 0 : profissionId
    return Professional.findAll({
      include: [
        { model: Profission, where: { id: profissionId } },
        { model: User }
      ]
    })
      .then(result => { return toDomain(result) })
      .catch(err => { throw err })
  }

  getById(id) {
    return Professional.findOne({ where: { id: id }, include: [User, Profission] })
      .then(result => { return toDomain(result) })
      .catch(err => { throw err })
  }

  findByCredentials(email, password) {
		return Professional.findOne({ where: { email: email } })
			.then(result => { return result && result.password === password ? toDomain(result) : null })
			.catch(err => { throw err })
	}

  create(user) {
    return super.create(user)
      .then(id => { return Professional.create({ id: id }) })
      .then(professional => professional.id)
      .catch(err => { throw err })
  }

  update(professional) {
    return Professional.update(professional, { where: { id: professional.id } })
      .then(() => { return super.update(professional) })
      .catch(err => { throw err })
  }
}
