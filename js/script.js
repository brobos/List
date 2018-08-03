
//    copy paste from here
function Todo(id, task) {
    this.id = id;
    this.task = task;
}

var todos = new Array();

window.onload = init;

function init() {

    var submitButton = document.getElementById("submit");
    submitButton.onclick = getFormData;

    getTodoItems();
}

function getTodoItems() {
    if (localStorage) {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.substring(0, 4) == "todo") {
                var item = localStorage.getItem(key);
                var todoItem = JSON.parse(item);
                todos.push(todoItem);
           }
        }
        addTodosToPage();
    }
    else {
        console.log("Error: you don't have localStorage!");
    }
}

function addTodosToPage() {
    var ul = document.getElementById("todoList");
    var listFragment = document.createDocumentFragment();
    for (var i = 0; i < todos.length; i++) {
        var todoItem = todos[i];
        var li = createNewTodo(todoItem);
        listFragment.appendChild(li);
    }
    ul.appendChild(listFragment);
}
function addTodoToPage(todoItem) {
    var ul = document.getElementById("todoList");
    var li = createNewTodo(todoItem);
    //trying to clear list
    // if (key.substring() == 0) {
    //         document.getElementById("todoList").innerHTML = "";
    //        }
    ul.appendChild(li);
    document.forms[0].reset();
}

function createNewTodo(todoItem) {
    var li = document.createElement("li");
    var spanTodo = document.createElement("span");
    spanTodo.innerHTML =
        todoItem.task;

    var spanDelete = document.createElement("span");
    spanDelete.setAttribute("id", todoItem.id);
    spanDelete.setAttribute("class", "delete");
    spanDelete.innerHTML = "\u00D7";

    spanDelete.onclick = deleteItem;

    li.appendChild(spanTodo);
    li.appendChild(spanDelete);

    return li;
}
             
function getFormData() {
    var task = document.getElementById("task").value;
    if (checkInputText(task, "Please enter a task")) return;

    var id = (new Date()).getTime();
    var todoItem = new Todo(id, task);
    todos.push(todoItem);
    addTodoToPage(todoItem);
    saveTodoItem(todoItem);
}

function checkInputText(value, msg) {
    if (value == null || value == "") {
        alert(msg);
        return true;
    }
    return false;
}

function saveTodoItem(todoItem) {
    if (localStorage) {
        var key = "todo" + todoItem.id;
        var item = JSON.stringify(todoItem);
        localStorage.setItem(key, item);
    }
    else {
        console.log("Error: you don't have localStorage!");
    }
}

function deleteItem(e) {
    var id = e.target.id;
    console.log("delete an item: " + id);

    // find and remove the item in localStorage
    var key = "todo" + id;
    localStorage.removeItem(key);

    // find and remove the item in the array
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1);
            break;
        }
    }

    // find and remove the item in the page
    var li = e.target.parentElement;
    var ul = document.getElementById("todoList");
    ul.removeChild(li);
}

// Click on a clear button to hide the all list items

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Click on a clear checked button to hide the all checked items
function checkedItems() {
    document.getElementByClassName("checked").innerHTML = "";
}

function closePopup() {
  document.getElementById('infoTxt').style.display = 'none';
}

function confirmClear() {
  document.getElementById('confirmClear').style.display = 'block';
}

function clearList() {
  window.localStorage.clear();
  closeClearPopup();
  document.location.reload(true);
}

function closeClearPopup() {
  document.getElementById('confirmClear').style.display = 'none';
}

function closeClosePopup() {
  document.getElementById('confirmClose').style.display = 'none';
}

function confirmCloseApp() {
  document.getElementById('confirmClose').style.display = 'block';
}


function exitFromApp() {
  navigator.app.exitApp();
}