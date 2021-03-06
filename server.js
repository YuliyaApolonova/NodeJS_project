/**
 * Created by jull on 08.06.2017.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var session = require('express-session');
// var session = require('./public/js/session_handler')
const sessionStore = require('./public/js/session_handler');

var port = process.env.port || 1337;

var multer = require('multer');
var upload = multer({dest: 'public/uploads'});
var type = upload.single('sample_file');

var index = require('./js_queries/index');
var contact = require('./js_queries/contact');
var login = require('./js_queries/login');
var sendMail = require('./js_queries/send-mail');
var portfolio = require('./js_queries/portfolio');
var edit = require('./js_queries/edit');
var update = require('./js_queries/update');
var remove = require('./js_queries/delete');
var info = require('./js_queries/info');
var newProject = require('./js_queries/new');
var upload = require('./js_queries/upload');

app.use(express.static('public'));
// middleware для обработки тела запроса в кодировке urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cookieParser());
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
app.use(sendMail);
app.use(portfolio);
app.use(edit);
app.use(update);
app.use(remove);
app.use(info);
app.use(newProject);
app.use(upload);

app.listen(port, function() {
   console.log('app running on port ' + port);
});

process.on('uncaughtException', function (err) {
   console.log(err);
});

module.exports = app;