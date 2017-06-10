/**
 * Created by jull on 09.06.2017.
 */
var express = require('express');
var router = express.Router();
const sessionStore = require('../public/js/session_handler');
// const sessionStore = require('../public/js/session_handler');
router.get('/login', function(req){
   console.log(req.body);
})

var users = [
   {username: 'admin', password: '12345'}
]

router.post('/login', function(req, res) {
   // if (req.body.username === 'admin' && req.body.password === '12345') {
      var foundUser;

      // поиск пользователя в массиве users
      for (var i = 0; i < users.length; i++) {
         var u = users[i];
         if (u.username == req.body.username && u.password == req.body.password) {
            foundUser = u.username;
         }
      }

      if (foundUser !== undefined) {

         req.session.username = req.body.username;
         console.log("Login succeeded: ", req.session.username);
         req.session.isLoggedIn = true;
         console.log(req.session.isLoggedIn);
         sessionStore.set(req.sessionID, req.session, function (err) {
            if (err) {
               console.log(err)
               return;
            } else {
               console.log('session saved!');
            }
         })
         // res.send('Login successful: ' + 'sessionID: ' + req.session.id + '; user: ' +  req.session.username);
      } else {

         console.log("Login failed: ", req.body.username)
         res.status(401).send('Login error');
      }
      // console.log('Authorisated successfully');
      // sessionStore.clear(function (err) {
      //
      //    if (err) console.log(err);
      //
      //    console.log('store is cleared');
      //
      // });
      // req.session.isLoggedIn = true;
      // req.session.username = req.body.username;
      // console.log(req.session.isLoggedIn);
      // sessionStore.set(req.sessionID, req.session, function (err) {
      //    if (err) {
      //       console.log(err)
      //       return;
      //    } else {
      //       console.log('session saved!');
      //    }
      // })
   // }
   res.redirect('/home');
   // res.end();
   // console.log(req.session.isLoggedIn);
})


module.exports = router;
