import requester from './routes/requester'
import professional from './routes/professional'
import profission from './routes/profission'
import account from './routes/account'
import visit from './routes/visit'
import chat from './routes/chat'
import image from './routes/image'

module.exports = (app) => {
    requester(app)
    professional(app)
    profission(app)
    account(app)
    visit(app)
    chat(app)
    image(app)
}