import {
  Chat,
  User
} from '../models'
import parseUser from '../../helpers/parseUser'

const toDomain = (entities) => {
  const parse = (entity) => {
    return {
      origin: entity.origin,
      destiny: entity.destiny,
      description: entity.description,
      date: entity.date,
      userDestiny: entity.User ? parseUser(entity.User) : null,
      type: entity.type
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

export default class ChatRepository {

  findByUser(id) {
    return Chat.findAll({
      where: { $or: [{ origin: id }, { destiny: id }] },
      include: User
    })
      .then(result => { return toDomain(result) })
      .catch(err => { throw err })
  }

  create(message) {
    return Chat.create(message)
      .then(result => { return toDomain(result) })
      .catch(err => { throw err })
  }
}
