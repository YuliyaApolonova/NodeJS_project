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
      // res.set('Content-Type', 'text/html');
      // res.send('<h2>User ' + req.session.username + ' is logged in! </h2>')
   } else {
      console.log('Editing is not allowed');
      res.render('registration');
   }
})

// router.get('/edit/:id', function(req, res) {
//
//    if(req.session.isLoggedIn){ //почему оно true??????
//       editHandler.showEditPage(req,res);
//    }
//    else{
//       console.log('Editing is not allowed');
//       res.render('registration');
//    }
// })

module.exports = router;
