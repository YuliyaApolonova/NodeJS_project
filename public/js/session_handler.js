/**
 * Created by jull on 09.06.2017.
 */
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var maxAge = 86400000;

var options = {
   host: 'localhost',
   port: 3330,
   user: 'root',
   password: 'Yuliyaapl5442',
   database: 'data',

   checkExpirationInterval: 900000,
   expiration: maxAge
};

var sessionStore = new MySQLStore(options);

// module.exports = session({
//    secret: 'secret',
//    resave: true,
//    saveUninitialized: true,
//    store: sessionStore,
//    cookie: {
//       httpOnly: false
//    }
// });

// const session = require('express-session');
// const mySQLStore = require('express-mysql-session')(session);
//
// var maxAge = 86400000;
//
// const sessionStore = new mySQLStore({
//    queueLimit: 10,
//    host: 'localhost',
//    user: 'root',
//    password: 'melodika14',
//    database: 'data',
//    port: 3306,
//
//    checkExpirationInterval: 900000,
//    expiration: maxAge
//
// });
//
module.exports = sessionStore;