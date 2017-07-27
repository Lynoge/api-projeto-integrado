import HttpStatus from 'http-status'
import Repository from '../infra/repository/user'
import permissions from './permissions'
import config from '../infra/config'

module.exports = (req, res, next) => {

  if (permissions.isFree(req.url, req.method)) {
    return next()
  }
  else if (!req.headers.token) {
    res.status(HttpStatus.UNAUTHORIZED)
    res.end('Token not found in header.')
  } else {
    const userRepository = new Repository()
    userRepository.findByToken(req.headers.token)
      .then(user => {
        if (user == null) {
          res.status(HttpStatus.UNAUTHORIZED)
          res.end('Invalid token.')
        } else {
          req.user = user
          next()
        }
      })
  }
}
