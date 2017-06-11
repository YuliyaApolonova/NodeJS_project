/**
 * Created by jull on 11.06.2017.
 */

var mysql = require('mysql');
var pool = require('./connection_pool');

var queries = require('./queries');

module.exports = {
   displayCategory: function(req, res) {

      pool.getConnection(function(err, connection){
         var query = queries.getCategory(req.params.id, connection);
         query.on('end', function(){
            res.end(queries.tableRows);
            connection.release();
         })
      })
   }
}