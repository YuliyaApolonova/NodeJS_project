/**
 * Created by jull on 09.06.2017.
 */
function validate(obj) {
   if(obj.username.value == '' || obj.password.value == ''){
      alert('fields are empty! Enter your data.');
      return false;
   }
   return true;
}