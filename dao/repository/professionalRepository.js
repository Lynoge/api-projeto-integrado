import { Professional, Profission } from '../models'

export default class professionalRepository {
  getAll () {
    var toDomain = this.toDomain
    var p = new Promise(function (resolve, reject) {
      Professional.findAll({ include: [Profission] }).then((result) => {
        resolve(toDomain(result))
      })
    })
    return p
  }

  findByNameAndProfission (name, profission) {
    var toDomain = this.toDomain
    name = name || ''
    profission = profission || ''
    var p = new Promise(function (resolve, reject) {
      Professional.findAll({
        where: { name: { $iLike: '%' + name + '%' } },
        include: [{ model: Profission, where: { name: { $iLike: '%' + profission + '%' } } }]
      }).then((result) => {
        resolve(toDomain(result))
      })
    })
    return p
  }

  findByProfission () {
    var toDomain = this.toDomain
    var p = new Promise(function (resolve, reject) {
      Professional.findAll({ where: { name: { $iLike: '%' + name + '%' } } }).then((result) => {
        var users = []
        var i = 0
        for (i; i < result.length; i++) { users.push(toDomain(result[i])) }
        resolve(users)
      })
    })
    return p
  }

  add (professional) {

  }

  update (professional) {

  }

  remove (professional) {

  }

  toDomain (entity) {
    if (Array.isArray(entity)) {
      var users = []
      var i = 0
      for (i; i < entity.length; i++) {
        users.push({
          professionalId: entity[i].professionalId,
          name: entity[i].name,
          email: entity[i].email,
          profission: entity[i].Profission
        })
      }
      return users
    } else {
      return {
        professionalId: entity.professionalId,
        name: entity.name,
        email: entity.email,
        profission: entity.Profission
      }
    }
  }
}
