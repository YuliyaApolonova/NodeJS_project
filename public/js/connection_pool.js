/**
 * Created by jull on 11.06.2017.
 */
var mysql = require('mysql');

// создать подключение к бд
var pool = mysql.createPool({
   queueLimit: 10,
   host: 'localhost',
   port: 3330,
   user: 'root',
   password: 'Yuliyaapl5442',
   database: 'data'
});

module.exports = pool;