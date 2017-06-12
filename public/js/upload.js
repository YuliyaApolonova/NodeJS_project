/**
 * Created by jull on 12.06.2017.
 */
window.onload = function(){
   var submitBtn = document.getElementById('addProject');
   submitBtn.addEventListener('click', function(e){
      var form = document.getElementById('add-form');
      var elems = form.elements;
      if(elems[1].value == '' || elems[2].value == '' || elems[3].value == '' || elems[4].value == ''){
         e.preventDefault();
         alert('Empty fileds! Input your data');
         return;
      }
   })
}