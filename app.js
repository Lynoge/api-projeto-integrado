var express = require('express');
var load = require("express-load");
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var authentication = require('./middleware/authentication');

var app = express();

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(authentication);

load('models')
    .then('controllers')
    .then('routes')
    .into(app);

module.exports = app;