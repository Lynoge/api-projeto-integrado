import requester from './routes/requester'
import professional from './routes/professional'

module.exports = (app) => {
    app.get('/', (req, res) => res.end('Welcome!'))

    requester(app)
    professional(app)
}