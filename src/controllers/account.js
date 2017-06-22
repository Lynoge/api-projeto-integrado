import HttpStatus from 'http-status'
import sha1 from 'sha1'
import ProfessionalRepository from '../infra/repository/professional'
import RequesterRepository from '../infra/repository/requester'
import accountValidation from '../helpers/accountValidation'
import exception from '../helpers/exception'

export default class Controller {

  signup(req, res) {
    const account = req.body
    try {
      accountValidation(account)
      let repository
      if (account.type === 'P')
        repository = new ProfessionalRepository()
      else
        repository = new RequesterRepository()
      repository.create(account)
        .then(result => {
          res.status(HttpStatus.CREATED)
          res.json({ token: sha1(result + Date()) })
        })
        .catch(err => {
          exception.httpHandler(res, err)
        })
    } catch (err) {
      exception.httpHandler(res, err)
    }
  }

  token(req, res) {
    res.setHeader('Content-Type', 'application/json')

    const email = req.body.email
    const password = req.body.password

    if (name && password) {
      repository.findByCredentials(name, password)
        .then((result) => {
          if (result && result.professionalId > 0) {
            let user = {}
            user.token = sha1(name + (new Date()).toString())
            user.logged = true
            user.name = name
            user.hashChat = sha1(result.professionalId)
            res.send(JSON.stringify(user))
          } else {
            res.send(JSON.stringify({ error: 'Invalid credentials' }))
          }
        }).catch((ex) => {
          res.send(JSON.stringify({ error: 'Invalid credentials' }))
        })
    } else {
      res.send(JSON.stringify({ error: 'Invalid credentials' }))
    }
  }
}
