import HttpStatus from 'http-status'
import jwt from 'jwt-simple'
import moment from 'moment'
import ProfessionalRepository from '../infra/repository/professional'
import RequesterRepository from '../infra/repository/requester'
import accountValidation from '../helpers/accountValidation'
import exception from '../helpers/exception'
const secret = 'tokenSecret'

const generateToken = (id) => {
  return jwt.encode({
    iss: id,
    exp: moment().add(7, 'days').valueOf()
  }, secret)
}

export default class Controller {

  signup(req, res) {
    const account = req.body
    try {
      accountValidation(account)
      const token = sha1(Date())
      account.token = token
      let repository
      if (account.type === 'P')
        repository = new ProfessionalRepository()
      else
        repository = new RequesterRepository()
      repository.create(account)
        .then(id => {

          res.status(HttpStatus.CREATED)
          res.json({ token: token })
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

    repository.findByCredentials(email, password)
      .then((result) => {
        if (!result || !result.professionalId)
          throw 'Credenciais inválidas'

        let user = {}
        user.token = sha1(name + (new Date()).toString())
        user.logged = true
        user.name = name
        user.hashChat = sha1(result.professionalId)
        res.send(JSON.stringify(user))
      }).catch(ex => { exception.httpHandler(res, err) })
  }
}
