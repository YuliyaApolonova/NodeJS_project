/**
 * Created by jull on 12.06.2017.
 */
/**
 * Created by jull on 12.06.2017.
 */

var express = require('express');
var router = express.Router();

router.get('/new', function(req, res) {
   res.render('new_project');
})

module.exports = router;
