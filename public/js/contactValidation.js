/**
 * Created by jull on 10.06.2017.
 */
function contactValidate(obj) {
   var nameTest=/^\w+$/;
   var emailTest = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/;
   var messageTest = /.{20,}/;
   if(!nameTest.test(obj.name.value)){
      alert('Only english letters allowed');
      return false;
   }
   if(!emailTest.test(obj.email.value)){
      alert('wrong email!');
      return false;
   }
   if(!nameTest.test(obj.subject.value)){
      alert('Only english letters allowed');
      return false;
   }
   if(!messageTest.test(obj.message.value)){
      alert('Too short message (at least 20 characters)');
      return false;
   }
   return true;
}