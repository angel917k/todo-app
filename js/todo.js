function addListItem (){

  var ul = document.getElementById('ul'); //grab ul to use for appending userinputs

  var todoItem = document.createElement('li'); //create li
    todoItem.classList.add('todo-item');
    todoItem.classList.add('center-block');

  var userInput = document.getElementById('todo').value; //value for user input
  var pTag = document.createElement('p');
  pTag.classList.add('strikethrough') ;//Creates p tag to hold user input
  pTag.innerHTML = '&nbsp;' + userInput; //places user input inside of p tag

  var completeButton = document.createElement('div'); // creates complete button div
  completeButton.classList.add('completed-button'); // add class to complete button div
  completeButton.addEventListener('click',function(e){
    currentClass=this.classList;

    if(currentClass.value==="completed-button"){
      var parent = this.parentNode;
      this.classList.remove('completed-button');
      this.classList.add('completed-button-done');
      parent.classList.remove('todo-item');
      parent.classList.add('todo-item-completed');
      parent.removeChild(parent.childNodes[1]);
    } else {
      this.classList.remove('completed-button-done');
      this.classList.add('completed-button');
      var parent = this.parentNode;
      parent.classList.remove('todo-item-completed');
      parent.classList.add('todo-item');

      var reappendEdit = document.createElement('div');
      reappendEdit.classList.add('edit-button');
      reappendEdit.addEventListener('click', function(e){
        var reappendEditUserEdit = prompt('What would you like to do instead?');

        if (reappendEditUserEdit != null){
        var parent = this.parentNode;
        var thisPTag = parent.childNodes[3];
        thisPTag.innerHTML = '&nbsp;' + reappendEditUserEdit;
      }else if (reappendEditUserEdit = null){

      }
      })
      parent.insertBefore(reappendEdit,parent.childNodes[1]);
    }

  }); // crosses out user input and removes edit button when clickes. removes crossout and adds edit button

  var editButton = document.createElement('div'); // creates edit button div
  editButton.classList.add('edit-button'); // adds edit button class to div
  editButton.addEventListener('click', function(e){
    var userEdit = prompt('What would you like to do instead?');

    if (userEdit != null){
    var parent = this.parentNode;
    var thisPTag = parent.childNodes[3];
    thisPTag.innerHTML = '&nbsp;' + userEdit
  }else if (userEdit = null){

  }

  }); // Edits current todo item

  var deleteButton = document.createElement('div'); //adds delete button div
  deleteButton.classList.add('delete-button'); // adds delete button class to div
  deleteButton.addEventListener('click', function(e){
    var confirmDelete = confirm("Wow there sailor, are you sure you want delete this todo item?");
    if(confirmDelete==true){
    var currentItem = this.parentNode;
    var currentItemParent = currentItem.parentNode;
    currentItemParent.removeChild(currentItem);
  }
  else{
  }
}); // deletes the current node by prompting user.

  todoItem.appendChild(completeButton);//  adds complete button to li
  todoItem.appendChild(editButton); // adds edit button to li
  todoItem.appendChild(deleteButton);//  adds delete button to li
  todoItem.appendChild(pTag); // adds user input to li
  ul.appendChild(todoItem); // adds entire li to ul

  document.getElementById('todo').value = ''; //Resets userinput field

}

var add = document.getElementById('add-button') // obtains add pencil button
add.addEventListener('click', function (){
  var userInput = document.getElementById('todo').value;
  if (userInput){
    addListItem();
  }
}); // triggers functionality based on whether or not the user input has value

var addUsingEnter = document.getElementById("todo")
addUsingEnter.addEventListener("keyup", function(event) {
  event.preventDefault();
  var userInput = document.getElementById('todo').value;
  if (userInput){
    if (event.keyCode === 13) {
        addListItem();
    }
  }
}); // adds todo item using the enter key, based on whether the user input has value
//
// var touchAdd = document.getElementById('add-button');
// touchAdd.addEventListener('touchstart',function addTouchClass(e) {
//   touchAdd.documentElement.classList.add('can-touch');
//   touchAdd.removeEventListener('touchstart', addtouchclass, false)
// },false);
