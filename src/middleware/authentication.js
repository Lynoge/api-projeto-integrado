
const validateUser = (user, url, method) => {
user
}

module.exports = function (req, res, next) {
  console.log(req.headers.token)
  console.log(req.url)
  console.log(req.method)
  return next()
}
