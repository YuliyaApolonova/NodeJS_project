/**
 * Created by jull on 09.06.2017.
 */
var express = require('express');
var router = express.Router();


router.post('/login', function(req, res) {
   if (req.body.username === 'admin' && req.body.password === '12345') {
      console.log('Authorisated successfully');
      // sessionStore.clear(function (err) {
      //
      //    if (err) console.log(err);
      //
      //    console.log('store is cleared');
      //
      // });
   }
})

module.exports = router;
