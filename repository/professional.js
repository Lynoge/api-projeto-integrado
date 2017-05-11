import {
  defaultResponse,
  errorResponse
} from '../helpers/http'

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

export default class professionalRepository {
  getAll () {
    return Professional.findAll({ include: [User, Profission] })
      .then(result => {
        return defaultResponse(toDomain(result))
      })
      .catch(error => {
        errorResponse(error.message)
      })
  }

  findByNameAndProfission (name, profission) {
    name = name || ''
    profission = profission || ''
    return Professional.findAll({
      where: { name: { $iLike: '%' + name + '%' } },
      include: [{ model: Profission, where: { name: { $iLike: '%' + profission + '%' } } }]
    })
      .then(result => defaultResponse(toDomain(result)))
      .catch(error => errorResponse(error.message))
  }

  findByProfission (name) {
    return Professional.findAll({ where: { name: { $iLike: '%' + name + '%' } } })
      .then(result => {
        let users = []
        for (let i = 0; i < result.length; i++) { users.push(toDomain(result[i])) }
        defaultResponse(users)
      })
      .catch(error => errorResponse(error.message))
  }

  findById (params) {
    return Professional.findOne({ where: params })
      .then(result => defaultResponse(toDomain(result)))
      .catch(error => errorResponse(error.message))
  }

  findByCredentials (name, password) {
    return new Promise((resolve, reject) => {
      Professional.findOne({ where: { name: name, password: password } })
        .then(result => {
          resolve(toDomain(result))
        },
        result => {
          throw result
        })
    })
  }
}
