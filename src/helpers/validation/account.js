import exception from '../../helpers/exception'
module.exports = (account) => {
	let err = { type: exception.PROPERTY_NOT_SATISFIED }
	if (!account.name) {
		err.message = "Nome inválido"
		throw err
	}

	if (!account.email) {
		err.message = "Email inválido"
		throw err
	}

	if (!account.password || account.password.length < 6) {
		err.message = "Senha inválida"
		throw err
	}

	if (!account.nickname) {
		err.message = "Nickname inválido"
		throw err
	}

	if (!account.type || (account.type !== 'P' && account.type !== 'R')) {
		err.message = "Tipo inválido"
		throw err
	}
}
