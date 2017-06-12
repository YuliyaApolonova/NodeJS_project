/**
 * Created by jull on 12.06.2017.
 */
window.onload = function(){
   var addBtn = document.getElementById('link-add');
   addBtn.addEventListener('click', function(){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'new/');
      xhr.send();
      xhr.onload = function() {
         location.href= '/new';
      }
   })
}