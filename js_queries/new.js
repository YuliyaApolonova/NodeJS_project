/**
 * Created by jull on 12.06.2017.
 */
/**
 * Created by jull on 12.06.2017.
 */

var express = require('express');
var router = express.Router();

router.get('/new', function(req, res) {
   if (req.session.username) {
      res.render('new_project');
      console.log('Adding is allowed');
   }
   else{
      console.log('Adding in not allowed');
      res.render('registration');
   }
})

module.exports = router;
