import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import socketIo from 'socket.io'
import http from 'http'

import authentication from './middleware/authentication'
import router from './router'
import chat from './sockets/chat'

const app = express()

app.use(express.static('public'))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization')
  next()
})

app.use(favicon(path.join(__dirname, '../public/images/favicon.ico')))
app.use('/public/images/professional/', express.static(path.join(__dirname, '/public/images/professional/')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(authentication)

const server = http.createServer(app)
const io = socketIo.listen(server)
chat(io)

router(app)

module.exports = server
