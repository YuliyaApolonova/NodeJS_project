/**
 * Created by jull on 12.06.2017.
 */
var express = require('express');
var router = express.Router();
var editHandler = require('../public/js/editHandler');

router.put('/update/:id', function(req, res){
   editHandler.updateItem(req, res);
})

module.exports = router;