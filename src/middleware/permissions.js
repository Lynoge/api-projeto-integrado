const requester = {
  '/visit': ['POST', 'GET']
}

const professional = {

}

const free = {
  '/token': ['POST'],
  '/signup': ['POST'],
  '/image': ['POST', 'GET']
}

module.exports = {
  requester: requester,
  professional: professional,
  isFree: (url, method) => {
    if (url.startsWith('/image'))
      return true
    return (free[url] && free[url].indexOf(method) != -1) ? true : false
  }
}