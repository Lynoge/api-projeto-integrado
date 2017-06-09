import { Profission } from '../models'

const toDomain = (entities) => {
  const parse = (entity) => {
    return {
      id: entity.id,
      name: entity.name,
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

export default class profissionRepository {

  getAll() {
    return Profission.findAll()
      .then(result => { return toDomain(result) })
      .catch(err => {
        err.message = 'ProfissionRepository.getAll() => ' + err.message
        throw err
      })
  }

  findById(id) {
    return Profission.findOne({ where: { id: id } })
      .then(result => toDomain(result))
      .catch(err => {
        err.message = 'ProfissionRepository.findById() => ' + err.message
        throw err
      })
  }

  create(name) {
    return Profission.create({ name: name })
      .then(result => result)
      .catch(err => {
        err.message = 'ProfissionRepository.create() => ' + err.message
        throw err
      })
  }

  delete(id) {
    return Profission.destroy({ where: { id: id } })
      .then((result) => result)
      .catch(err => {
        err.message = 'ProfissionRepository.delete() => ' + err.message
        throw err
      })
  }
}
