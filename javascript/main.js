"use strict"; //använd modern javascript

const LOCAL_STORAGE_KEY_TODOS =  "app.todos";
let todos  = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TODOS)) || [];
//let todos = "";
let listRoot = document.getElementById('list');
let x=0;


function CreateNote() {
    let text = document.getElementById('textbox').value;
    if (text.trim() != "")
    {
        let todoListItem = document.createElement("li");
        let list = document.getElementById('list');
        todoListItem.innerText = text;
        todoListItem.classList.add("textitem");
        todoListItem.addEventListener("click", DeleteNote)
        list.append(todoListItem);
        updateList();
    }
}


function todoList(items) {
    let list = document.createElement("ul");
    items.forEach((item) => {
      let todoListItem = document.createElement("li");
      todoListItem.innerText = item;
      todoListItem.classList.add("todo-list-item");
      todoListItem.addEventListener("click", removeItem);
      list.append(todoListItem);
    });
    return list;
  }

function DeleteNote(event)
{
    let node = document.getElementById("list");
    let child = event.target;
    node.removeChild(child);
    updateList();
    
}

function updateList() {
    saveList();
    console.log(localStorage)
    todos = document.getElementById('list').innerHTML
    listRoot.append(todoList(todos));
  }
  
  function saveList() {
    localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, JSON.stringify(todos));
  }
