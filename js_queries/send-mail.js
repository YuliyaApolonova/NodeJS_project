/**
 * Created by jull on 11.06.2017.
 */

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true })

router.post('/send-mail', urlencodedParser, function(req, res) {

   console.log('Sending email...');
   console.log(req.body);

   var formData = req.body.split('\r\n');

   var postData = [];
   for(var i=0;i < formData.length;i++) {
      var tmpArr = formData[i].split('=');
      postData.push({[tmpArr[0]]:tmpArr[1]});
   }
   var name = postData[0].name;
   var recipient = postData[1].email;
   var subject = postData[2].subject;
   var message = name + '! Thank you for your message:' + postData[3].message;
   var transporter = nodemailer.createTransport(smtpTransport({
      service: 'Gmail',
      auth: {
         user: 'juliyaapl2602@gmail.com', // my mail
         pass: 'melodika14'
      }
   }));

   var mailOptions = {
      from: 'juliyaapl2602@gmail.com', // sender address
      to: recipient, // list of receivers 'yuliyaapl@mail.ru'
      subject:  subject, // Subject line
      text: message //, // plaintext body
      // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
   };

   transporter.sendMail(mailOptions, function(error, info){
      if(error){
         console.log(error);
         res.json({yo: 'error'});
      }else{
         console.log('Message sent: ' + info.response);
         // res.json({yo: info.response});
         res.redirect('/home');
      };
   });

})
router.get('/send-mail', function(req, res){
   console.log('Email sent' + req.body);
})
module.exports = router;
