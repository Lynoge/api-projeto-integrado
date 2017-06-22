import requester from './routes/requester'
import professional from './routes/professional'
import profission from './routes/profission'
import account from './routes/account'

module.exports = (app) => {
    app.get('/', (req, res) => res.end('Welcome!'))

    requester(app)
    professional(app)
    profission(app)
    account(app)
}