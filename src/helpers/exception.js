import HttpStatus from 'http-status'

module.exports = {
	PROPERTY_NOT_SATISFIED: 1,
	NOT_FOUND: 2,
	UNAUTHORIZED: 3,
	httpHandler: (res, err) => {
		if (typeof err === 'object' && err.type) {
			switch (err.type) {
				case 1:
					res.status(HttpStatus.UNPROCESSABLE_ENTITY)
					res.json({ error: err.message })
					break;
				case 2:
					res.status(HttpStatus.NOT_FOUND)
					res.json({ error: err.message })
					break;
				case 3:
					res.status(HttpStatus.UNAUTHORIZED)
					res.json({ error: err.message })
					break;
				default:
					res.status(HttpStatus.INTERNAL_SERVER_ERROR)
					res.json({ error: err });
					break;
			}
		} else {
			res.status(HttpStatus.INTERNAL_SERVER_ERROR)
			res.json({ error: err.message ? err.message : err })
		}
	}
}