/**
 * Created by jull on 09.06.2017.
 */
var express = require('express');
var router = express.Router();
var displayHandler = require('../public/js/displayHandler');

/* GET home page. */
// router.get('/home', function(req, res) {
//    res.render('index', {});
// })

router.get('/home', displayHandler.displayItems);

router.get('/', function (req, res) {
   res.redirect('/home');
})

module.exports = router;