/**
 * Created by jull on 11.06.2017.
 */

var express = require('express');
var router = express.Router();
var editHandler = require('../public/js/editHandler');

router.get('/edit/:id', function(req, res) {
   console.log(req.session.username);
   if (req.session.username) {
      editHandler.showEditPage(req,res);
      console.log('Editing allowed');

   } else {
      console.log('Editing is not allowed');
      res.render('registration');
   }
})


module.exports = router;
