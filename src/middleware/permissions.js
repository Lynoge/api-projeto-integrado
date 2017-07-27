const free = {
  '/token': ['POST'],
  '/signup': ['POST']
}

module.exports = {
  isFree: (url, method) => {
    if (url.startsWith('/image') && method == 'GET')
      return true
    return (free[url] && free[url].indexOf(method) != -1) ? true : false
  }
}