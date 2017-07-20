import HttpStatus from 'http-status'
import Repository from '../infra/repository/user'
import permissions from './permissions'
import config from '../infra/config'

const validateUserResquest = (user, url, method) => {
  if (user.type === 'P') {
    if (permissions.professional[url] && permissions.professional[url].indexOf(method) != -1)
      return true
  } else {
    if (permissions.requester[url] && permissions.requester[url].indexOf(method) != -1)
      return true
  }
  return false;
}

module.exports = (req, res, next) => {

  if (permissions.isFree(req.url, req.method))
    return next()
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
