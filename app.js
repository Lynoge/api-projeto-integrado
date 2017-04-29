import express from 'express'
import load from 'express-load'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import socketIo from 'socket.io'
import http from 'http'

var authentication = require('./middleware/authentication')

var app = express()

//var server = require('http').createServer(app),
//var io = require('socket.io').listen(server);

app.use(express.static('public'));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization')
  next()
})

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(authentication)

load('models')
  .then('controllers')
  .then('routes')
  .into(app)

var server = http.createServer(app)
var io = socketIo.listen(server)


load('sockets')
  .into(io)

module.exports = server
