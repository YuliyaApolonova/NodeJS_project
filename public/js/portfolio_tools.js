/**
 * Created by jull on 11.06.2017.
 */
window.onload = function(){
   var tools = document.getElementsByClassName('works-item-mask');
   for(var i=0; i<tools.length; i++){
      tools[i].addEventListener('click', function(e){
         var target = e.target;
         if(!target.dataset.tool){
            return;
         }
         switch(target.dataset.tool){
            case 'edit':
               var xhr = new XMLHttpRequest();
               xhr.open('GET', 'edit/' + e.target.dataset.id);
               xhr.send();
               xhr.onload = function() {
                  location.href= '/edit/' + e.target.dataset.id;
               }
               break;
            case 'remove':
               var result = confirm('Are you sure to delete this project?');
               if(result){
                  var xhr = new XMLHttpRequest();
                  xhr.open('DELETE', 'edit/'+ e.target.dataset.id);
                  xhr.send();
                  xhr.onload = function(){
                     location.href= '/home';
                  }
               }
               break;
            case 'info':
               var xhr = new XMLHttpRequest();
               xhr.open('GET', '/view/'+ e.target.dataset.id);
               xhr.send();
               xhr.onload = function(){
                  location.href = '/view/' + e.target.dataset.id;
               }
               break;
         }
      })
   }
}