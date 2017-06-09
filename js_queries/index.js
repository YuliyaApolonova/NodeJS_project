/**
 * Created by jull on 09.06.2017.
 */
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/home', function(req, res) {
   res.render('index', {});
})
//    projects.getByCategory(null, function (err, data) {
//       if (err) {
//          console.log(err);
//          res.render('index', { authorised: req.session.user, projects: [] });
//       } else {
//          res.render('index', { authorised: req.session.user, projects: data });
//       }
//    })
// });

router.get('/', function (req, res) {
   res.redirect('/home');
})

module.exports = router;