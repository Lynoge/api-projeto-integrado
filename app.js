import express from 'express';
import load from "express-load";
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

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