/**
 * Created by jull on 09.06.2017.
 */
var express = require('express');
var router = express.Router();

router.get('/contact', function(req, res) {
   res.render('contact', {});
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

module.exports = router;
