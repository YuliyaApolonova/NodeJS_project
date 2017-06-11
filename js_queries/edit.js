/**
 * Created by jull on 11.06.2017.
 */

var express = require('express');
var router = express.Router();

router.get('/edit/:id', function(req, res) {
   if(req.session.isLoggedIn){
      res.render('edit');
   }
   else{
      console.log('Editing is not allowed');
      res.render('registration');
   }
})

module.exports = router;
