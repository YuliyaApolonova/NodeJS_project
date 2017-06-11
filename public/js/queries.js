/**
 * Created by jull on 11.06.2017.
 */
var mysql = require('mysql');

module.exports = {
   counter: 0,
   item: {},
   tableRows: '',
   // выбор всех элементов и отображение в виде таблицы
   getAllItems: function (connection) {
      var self = this;
      var query = connection.query('SELECT * FROM `projects`', function (err, rows) { //query to DB
         if (err) console.log(err);
         // генерация рядов таблицы на основе полученных данных
         var table_rows = rows.map((row) => {
                  return (`  <li class="works-item">
                        <img src=${row.src} />
                        <div class="works-item-mask">
                            <span class="mask-content">
                                <div>
                                    <a data-id=${row.id} ><i data-id=${row.id} data-tool="edit" class="fa fa-edit"></i></a>
                                    <a data-id=${row.id} ><i data-id=${row.id} data-tool="info" class="fa fa-info"></i></a>
                                </div>
                                <a data-id=${row.id}  class="link-delete"><i data-id=${row.id} data-tool="remove" class="fa fa-remove"></i></a>
                            </span>
                        </div>
                    </li> `)
         })

         self.tableRows = table_rows.join(' ');

      });
      return query;
   },

   getCategory: function (id, connection) {
      var self = this;
      if (id == "all") return this.getAllItems(connection);

      var query = connection.query('SELECT * FROM `projects` WHERE CATEGORY=?', [id], function (err, rows) {
         if (err) console.log(err)

         // генерация рядов таблицы на основе полученных данных
         var table_rows = rows.map((row) => {
                  return (`  <li class="works-item">
                        <img src=${row.src} />
                        <div class="works-item-mask">
                            <span class="mask-content">
                                <div>
                                    <a data-id=${row.id} ><i data-id=${row.id} class="fa fa-edit"></i></a>
                                    <a data-id=${row.id} ><i data-id=${row.id} class="fa fa-info"></i></a>
                                </div>
                                <a data-id=${row.id}  class="link-delete"><i data-id=${row.id} class="fa fa-remove"></i></a>
                            </span>
                        </div>
                    </li> `)
         })

         self.tableRows = table_rows.join(' ');

      });
      return query;
   }
}

