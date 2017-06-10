/**
 * Created by jull on 08.06.2017.
 */
var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var session = require('express-session');
// var session = require('./public/js/session_handler')
const sessionStore = require('./public/js/session_handler');

var port = process.env.port || 1337;

var index = require('./js_queries/index');
var contact = require('./js_queries/contact');
var login = require('./js_queries/login');

app.use(express.static('public'));
// middleware для обработки тела запроса в кодировке urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(session({
   secret: 'secret',
   resave: true,
   saveUninitialized: true,
   store: sessionStore
}));

// app.use(session);
app.use(index);
app.use(contact);
app.use(login);

app.listen(port, function() {
   console.log('app running on port ' + port);
});

process.on('uncaughtException', function (err) {
   console.log(err);
});

module.exports = app;