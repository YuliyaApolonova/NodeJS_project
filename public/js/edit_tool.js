/**
 * Created by jull on 12.06.2017.
 */
window.onload = function(){

    var editBtn = document.getElementById('submit');
    var form = document.getElementById('edit-form');
    var elems = form.elements;
    editBtn.addEventListener('click', function(e){
      if(elems[0] == '' || elems[1] == '' || elems[2] == '' || elems[3] == '' ){
         alert('Fields are empty! Input your data.');
         return;
      }
      var xhr = new XMLHttpRequest();
      xhr.open('PUT', '/update/' + e.target.dataset.id);
      var data = {
         title: elems[0].value,
         description: elems[3].value,
         author: elems[1].value,
         category: elems[2].value,
         id: e.target.dataset.id
      }
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
      xhr.onload = function(){
         location.href = '/home';
      }
    })
}