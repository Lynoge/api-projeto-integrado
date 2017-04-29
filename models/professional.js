var userCache = {
  'jeffmo': {fname: 'Jeff', lname: 'Morrison'}
}

function getUser (username, cb) {
  if (userCache[username]) {
    setTimeout(function () {
      cb(null, userCache[username])
    }, 0)
  } else {
    return null
  }
}

exports.getUser = getUser
