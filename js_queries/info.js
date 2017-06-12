/**
 * Created by jull on 12.06.2017.
 */
/**
 * Created by jull on 11.06.2017.
 */

var express = require('express');
var router = express.Router();
var editHandler = require('../public/js/editHandler');

router.get('/view/:id', function(req, res) {

      editHandler.showInfo(req,res);
      console.log('Showing information about project...');

})

module.exports = router;
