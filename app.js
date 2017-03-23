var express = require('express'),
    load = require('express-load'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    methodOverride = require('express-method-override'),
    bodyParser = require('body-parser'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(cookieParser("apirentservice"));
app.use(session({ resave: true, saveUninitialized: true, secret: "denied" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

app.use(express.static(path.resolve(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

load('models')
    .then('controllers')
    .then('routes')
    .into(app);
    
load('sockets').into(io);

server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});