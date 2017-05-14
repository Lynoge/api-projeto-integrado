import ProfessionalRepository from '../repository/professional'
import RequesterRepository from '../repository/requester'

const professionalRepository = new ProfessionalRepository()
const requesterRepository = new RequesterRepository()

let requester = {
	username: 'requester',
	name: 'requester',
	password: '123',
	active: false,
	createAt: new Date(),
	email: 'requester@mail.com'
}

let professional = {
	username: 'professional',
	name: 'professional',
	password: '123',
	active: false,
	createAt: new Date(),
	email: 'professional@mail.com'
}

const Scripts = {
	runInsert: () => {
		professionalRepository.add(requester).then((id) => { 
			requester.id = id
			console.log(requester)
		 })
	},
	runDelete: () => {

	}
}

module.exports = Scripts
