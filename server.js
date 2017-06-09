/**
 * Created by jull on 08.06.2017.
 */
var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

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

app.use(index);
app.use(contact);
app.use(login);

app.listen(port, function() {
   console.log('app running on port ' + port);
});
module.exports = app;