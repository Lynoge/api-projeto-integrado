import HttpStatus from 'http-status'

module.exports = (res, err) => {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR)
    res.json({message: err.message})
}