import {
  Professional,
  Profission,
} from '../../models'

export default class professionalRepository {

  getAll() {
    const that = this

    return new Promise((resolve, reject) => {
      Professional.findAll({include: [Profission]}).then(result => resolve(that.toDomain(result)))
    })
  }

  findByNameAndProfission(name, profission) {
    const that = this
    var name = name || ''
    var profission = profission || ''

    return new Promise((resolve, reject) => {
      Professional.findAll({
        where: { name: { $iLike: '%' + name + '%' } },
        include: [{ model: Profission, where: { name: { $iLike: '%' + profission + '%' } } }]
      }).then(result => resolve(that.toDomain(result)))
    })
  }

  findByProfission() {
    const that = this

    return new Promise((resolve, reject) => {
      Professional.findAll({ where: { name: { $iLike: '%' + name + '%' } } }).then(result => {
        let users = []

        for (let i = 0; i < result.length; i++) {
          users.push(that.toDomain(result[i]))
        }

        resolve(users)
      })
    })
  }

  findById(id) {
    const that = this

    return new Promise((resolve, reject) => {
      Professional.findById(id).then(result => resolve(that.toDomain(result)))
    })
  }

  findByCredentials(name, password) {
    const that = this

    return new Promise((resolve, reject) => {
      Professional.findOne({where: { name: name, password: password }})
        .then(result => {
          resolve(that.toDomain(result))
        },
        result => {
          throw result
        })
    })
  }

  toDomain(entity) {
    if (Array.isArray(entity)) {
      let users = []
      for (let i = 0; i < entity.length; i++) {
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
