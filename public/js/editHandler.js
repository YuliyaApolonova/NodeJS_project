/**
 * Created by jull on 11.06.2017.
 */
var mysql = require('mysql');
var pool = require('./connection_pool');

var queries = require('./queries');

   module.exports = {
      item: {},
      showEditPage: function (req, res) {
         var self = this;
         pool.getConnection(function (err, connection) {

            var query = connection.query('SELECT * FROM `projects` WHERE id=?', [req.params.id], function (err, rows) {
               if (err) console.log(err);
               self.item = rows[0];

            })

            query.on('end', function () {
               res.render('edit', {item: self.item});
               connection.release();
            })

         })
      },
      updateItem: function(req, res){

         console.log('Updating items...');
            pool.getConnection(function (err, connection) {
            // запрос к бд
            var query = queries.updateItem(req.body,req.params.id, connection);

            query.on('end', function () {
               // res.redirect('/home');
               res.end();

               // завершение соединения
               connection.release();

            });
         });
      },
      
   }