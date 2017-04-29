import { Professional, Profission } from '../models'

export default class professionalRepository {
  getAll() {
    var toDomain = this.toDomain
    var p = new Promise(function (resolve, reject) {
      Professional.findAll({ include: [Profission] }).then((result) => {
        resolve(toDomain(result))
      })
    })
    return p
  }

  findByNameAndProfission(name, profission) {
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

  findByProfission() {
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

  findById(id) {
    const that = this

    return new Promise((resolve, reject) => {
      Professional.findById(id).then(result => resolve(that.toDomain(result)))
    })
  }

  findByCredentials(name, password) {
    const that = this
    console.log('repository')
    return new Promise((resolve, reject) => {
      console.log('start promise')
      Professional.findOne({
        where: { name: name, password: password }
      })
        .then(result => {
          console.log('repository result promise')
          resolve(that.toDomain(result))
        },
        result => {
          console.log(result)
          throw result
        })
    })
  }

  add(professional) {

  }

  update(professional) {

  }

  remove(professional) {

  }

  toDomain(entity) {
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
