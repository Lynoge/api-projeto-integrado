import { Visit } from '../models'

const toDomain = (entities) => {
  const parse = (entity) => {
    return {
      id: entity.id,
      rating: entity.rating,
      date: entity.date,
      endDate: entity.endDate,
      professionalId: entity.professionalId,
      requesterId: entity.requesterId,
      canceled: entity.canceled,
      status: entity.status
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

  findSome(where) {
    return Visit.findAll({ where: where })
      .then(result => toDomain(result))
      .catch(err => {
        err.message = 'VisitRepository.findByRequester() => ' + err.message
        throw err
      })
  }

  create(visit) {
    visit.status = "PENDENTE"
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
