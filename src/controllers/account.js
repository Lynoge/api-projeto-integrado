import HttpStatus from 'http-status'
import sha1 from 'sha1'

import ProfessionalRepository from '../infra/repository/professional'
import RequesterRepository from '../infra/repository/requester'
import accountValidation from '../helpers/validation/account'
import exception from '../helpers/exception'

const professionalRepository = new ProfessionalRepository()
const requesterRepository = new RequesterRepository()
const secret = 'tokenSecret'
const generateToken = () => {
  return sha1(new Date() + Math.random().toFixed(3))
}

export default class Controller {

  signup(req, res) {
    const account = req.body
    try {
      accountValidation(account)
      account.token = generateToken()
      let repository
      if (account.type === 'P')
        repository = professionalRepository
      else
        repository = requesterRepository
      repository.create(account)
        .then(id => {
          res.status(HttpStatus.CREATED)
          res.json({ user: account })
        })
        .catch(err => {
          exception.httpHandler(res, err)
        })
    } catch (err) {
      exception.httpHandler(res, err)
    }
  }

  token(req, res) {
    const email = req.body.email
    const password = req.body.password
    const repository = new UserRepository()
    repository.findByCredentials(email, password)
      .then((result) => {
        if (!result)
          throw 'Credenciais inválidas'
        res.send({ user: result })
      }).catch(ex => { exception.httpHandler(res, err) })
  }
}
