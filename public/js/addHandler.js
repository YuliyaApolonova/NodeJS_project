/**
 * Created by jull on 12.06.2017.
 */
var mysql = require('mysql');
var pool = require('./connection_pool');

var queries = require('./queries');
module.exports = {
   addItem: function (req, res) {
      var src = "uploads/" + req.file.originalname;
      // подключение к бд
      pool.getConnection(function (err, connection) {
         var query = queries.addItem(req.body, src, connection);
         query.on('end', function () {
            res.redirect('/home');
            // res.end();

            // завершение соединения
            connection.release();
         })
      })
   }
}