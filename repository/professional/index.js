import toDomain from './domain'

import {
  defaultResponse,
  errorResponse
} from '../../helpers/http'

import {
  Professional,
  Profission
} from '../../models'

export default class professionalRepository {
  getAll () {
    return Professional.findAll({ include: [Profission] })
      .then(result => defaultResponse(toDomain(result)))
      .catch(error => errorResponse(error.message))
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
