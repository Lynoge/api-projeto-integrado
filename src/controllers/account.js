import HttpStatus from 'http-status'
// import jwt from 'jwt-simple'
// import moment from 'moment'
import ProfessionalRepository from '../infra/repository/professional'
import RequesterRepository from '../infra/repository/requester'
import accountValidation from '../helpers/accountValidation'
import exception from '../helpers/exception'
import sha1 from 'sha1'

const professionalRepository = new ProfessionalRepository()
const requesterRepository = new RequesterRepository()
const secret = 'tokenSecret'
const generateToken = (id) => {
  return sha1(id)
  // return jwt.encode({
  //   iss: id,
  //   exp: moment().add(7, 'days').valueOf()
  // }, secret)
}

export default class Controller {

  signup(req, res) {
    const account = req.body
    try {
      accountValidation(account)
      let repository
      if (account.type === 'P')
        repository = professionalRepository
      else
        repository = requesterRepository
      repository.create(account)
        .then(id => {
          account.token = generateToken(id)
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
