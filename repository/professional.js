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
      username: entity.User.username,
      email: entity.User.email,
      phone: entity.User.phone,
      active: entity.User.active,
      createAt: entity.User.createAt,
      updateAt: entity.User.updateAt,
      type: entity.User.type,
      profission: entity.Profission,
      description: entity.description,
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

export default class professionalRepository extends UserRepository {
  getAll() {
    return Professional.findAll({ include: [User, Profission] })
      .then(result => {
        return toDomain(result)
      })
      .catch(err => {
        err.message = 'ProfessionalRepository.getAll() => ' + err.message
        throw err
      })
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
      .catch(err => {
        err.message = 'ProfessionalRepository.findNameAndProfission() => ' + err.message
        throw err
      })
  }

  findByProfission(name) {
    return Professional.findAll({ where: { name: { $iLike: '%' + name + '%' } } })
      .then(result => toDomain(result))
      .catch(err => {
        err.message = 'ProfessionalRepository.findByProfission() => ' + err.message
        throw err
      })
  }

  getById(id) {
    return Professional.findOne({ where: { id: id }, include: [User, Profission] })
      .then(result => {
        return toDomain(result)
      })
      .catch(err => {
        err.message = 'ProfessionalRepository.getById() => ' + err.message
        throw err
      })
  }

  create(user) {
    user.type = 'P'
    return super.create(user)
      .then(id => { return Professional.create({ id: id }) })
      .then(professional => professional.id)
      .catch(err => {
        err.message = 'ProfessionalRepository.create() => ' + err.message
        throw err
      })
  }

  delete(id) {
    return Professional.destroy({ where: { id: id } })
      .then(() => {
        return super.delete(id)
      })
      .catch(err => {
        err.message = 'ProfessionalRepository.delete() => ' + err.message
        throw err
      })
  }

  update(professional) {
    return Professional.update(professional, { where: { id: professional.id } })
      .then(() => {
        return super.update(professional)
      })
      .catch(err => {
        err.message = 'ProfessionalRepository.update() => ' + err.message
        throw err
      })
  }
}
