const requester = {
  '/visit': ['POST', 'GET']
}

const professional = {

}

const free = {
  '/token': ['POST'],
  '/signup': ['POST']
}

module.exports = {
  requester: requester,
  professional: professional,
  isFree: (url, method) => {
    return (free[url] && free[url].indexOf(method) != -1) ? true : false
  }
}