/**
 * Created by jull on 11.06.2017.
 */
window.onload = function(){
   
   var ul = document.getElementById('category-list');
   var container = document.getElementsByClassName('works-content')[0];
   ul.addEventListener('click', function(e){
      var target = e.target;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'home/' + target.dataset.category);
      xhr.send();
      xhr.onload = function (response) {
         container.innerHTML=this.responseText;

      }

   })
}
