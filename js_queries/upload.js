/**
 * Created by jull on 12.06.2017.
 */

var express = require('express');
var router = express.Router();
var addHandler = require('../public/js/addHandler');

var multer = require('multer');
var upload = multer({dest: 'public/uploads'});
var type = upload.single('sample_file');
var path = require('path');
const fs = require('fs');

router.get('/upload', function(req, res) {
   console.log('Image uploaded');
})

router.post('/upload', type, function(req, res){
   console.log(req.file);
   console.log(req.file.destination + '' + req.file.path);

   // файл временного хранения данных
   var tmp_path = req.file.path;

   // место, куда файл будет загружен
   var target_path = path.join(req.file.destination, req.file.originalname);

   // загрузка файла
   var src = fs.createReadStream(tmp_path);
   var dest = fs.createWriteStream(target_path);

   src.pipe(dest);

   // обработка результатов загрузки
   src.on('end', function() {

      // удалить файл временного хранения данных
      fs.unlink(tmp_path);

   });
   src.on('error', function(err) {

      // удалить файл временного хранения данных
      fs.unlink(tmp_path);

   });
   addHandler.addItem(req, res);
})
module.exports = router;
