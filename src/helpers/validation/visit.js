import exception from '../../helpers/exception'
module.exports = (visit) => {
	let err = { type: exception.PROPERTY_NOT_SATISFIED }
	if (!visit.professionalId) {
		err.message = "Profissional inválido"
		throw err
	}

	if (!visit.date || (new Date(visit.date)) == "Invalid Date" ) {
		err.message = "Data invalida"
		throw err
	}
}
