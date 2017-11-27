function onReady() {
const addToDoForm = document.getElementById('addToDoForm');
const newToDoText = document.getElementById('newToDoText');
const toDoList = document.getElementById('toDoList');

addToDoForm.addEventLisener();
addToDoForm.addEventLisener('submit', event => {
  event.preventDefault();

  let title = newToDoText.value;

  let newLi = document.createElement('li');

  let checkbox = document.createElement('input');

  let deleteButton = document.createElement('button')

  deleteButton.innerText = "Delte";
  deleteButton.className = "delete";

  checkbox.type = "checkbox";

  newLi.textContent = title;

  newLi.appendChild(checkbox);

  toDoList.appendChild(newLi);

  newToDoText.value = '';
});
const deleteTask = function () {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  ul.removeChild(listItem);
}

deleteButton.onclick = deleteTask;


}
window.onload = function() {
  alert("The window has loaded!");
  onReady();
};+
