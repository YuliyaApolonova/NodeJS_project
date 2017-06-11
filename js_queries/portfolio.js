/**
 * Created by jull on 11.06.2017.
 */
var express = require('express');
var router = express.Router();
var categoryHandler = require('../public/js/categoryHandler');
/* GET portfolio */

router.get('/home/:id', categoryHandler.displayCategory);

module.exports = router;