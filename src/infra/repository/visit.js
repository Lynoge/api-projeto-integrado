import { Visit } from '../models'

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

export default class VisitRepository {

  getAll() {
    return Visit.findAll()
      .then(result => { return toDomain(result) })
      .catch(err => {
        err.message = 'VisitRepository.getAll() => ' + err.message
        throw err
      })
  }

  findById(id) {
    return Visit.findOne({ where: { id: id } })
      .then(result => toDomain(result))
      .catch(err => {
        err.message = 'VisitRepository.findById() => ' + err.message
        throw err
      })
  }

  create(visit) {
    return Visit.create(visit)
      .then(result => result)
      .catch(err => {
        err.message = 'VisitRepository.create() => ' + err.message
        throw err
      })
  }

  delete(id) {
    return Visit.destroy({ where: { id: id } })
      .then((result) => result)
      .catch(err => {
        err.message = 'VisitRepository.delete() => ' + err.message
        throw err
      })
  }
}
