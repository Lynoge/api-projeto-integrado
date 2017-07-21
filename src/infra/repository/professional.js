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
    return Professional.findOne({ where: { email: email } })
      .then(result => { return result && result.password === sha1(password) ? toDomain(result) : null })
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
