import sha1 from 'sha1'
import UserRepository from './user'
import parseUser from '../../helpers/parseUser'
import {
  Professional,
  Profission,
  User,
  ProfessionalProfission
} from '../models'

const toDomain = (entities) => {
  const parse = (entity) => {
    let professional = parseUser(entity.User)
    professional.profissions = entity.Profissions.map((p) => { return { name: p.id, id: p.name } })
    professional.description = entity.description
    return professional
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
    return Professional.findAll({
      include: [User, Profission]
    })
      .then(result => { return toDomain(result) })
      .catch(err => { throw err })
  }

  findSome(where) {
    return Professional.findAll({
      include: [{ model: User, where: where }, Profission]
    })
      .then(result => { return toDomain(result) })
      .catch(err => { throw err })
  }

  findByProfission(profission) {
    const where = isNaN(profission) ? { name: { $iLike: '%' + profission + '%' } } : { id: profission }
    return Professional.findAll({
      include: [
        { model: Profission, where: where },
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
    return Professional.findOne({
      include: [
        { model: User, where: { email: email } },
        Profission
      ]
    })
      .then(result => { return result && result.User.password === sha1(password) ? toDomain(result) : null })
      .catch(err => { throw err })
  }

  create(user) {
    return super.create(user)
      .then(id => { return Professional.create({ id: id }) })
      .then(professional => professional.id)
      .catch(err => { throw err })
  }

  update(professional) {
    let user = {}
    if (professional.nickname)
      user.nickname = professional.nickname
    if (professional.name)
      user.name = professional.name
    if (professional.phone)
      user.phone = professional.phone
    if (professional.rating)
      user.rating = professional.rating

    const where = { id: professional.id }

    if (professional.description) {
      return Professional.update({ description: professional.description }, { where: where })
        .then(() => { return super.update(user, where) })
        .catch(err => { throw err })
    } else {
      return super.update(user, where)
        .then(result => result)
        .catch(err => { throw err })
    }
  }
  addProfission(professionalId, profissionId) {
    return ProfessionalProfission
      .create({ professionalId: professionalId, profissionId: profissionId })
      .then(result => result)
      .catch(err => { throw err })
  }

  removeProfission(professionalId, profissionId) {
    return ProfessionalProfission
      .destroy({ where: { professionalId: professionalId, profissionId: profissionId } })
      .then(result => result)
      .catch(err => { throw err })
  }
}
