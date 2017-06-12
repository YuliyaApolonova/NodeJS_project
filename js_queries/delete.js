/**
 * Created by jull on 12.06.2017.
 */
/**
 * Created by jull on 11.06.2017.
 */

var express = require('express');
var router = express.Router();
var editHandler = require('../public/js/editHandler');

router.delete('/delete/:id', function(req, res) {
   console.log(req.session.username);
   if (req.session.username) {
      editHandler.removeItem(req, res);
      console.log('Deleting allowed');

   } else {
      console.log('Deleting is not allowed');
      res.render('registration');
   }
})

module.exports = router;
