"use strict"; //använd modern javascript

const LOCAL_STORAGE_KEY_TODOS =  "app.todos";
let todos  = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TODOS)) || [];
let listRoot = document.getElementById('list');


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

function DeleteNote(event)
{
    let node = document.getElementById("list");
    let child = event.target;
    let throwawayNode = node.removeChild(child);
    todos = document.getElementById('list').innerHTML
    updateList();
}

function updateList() {
    saveList();
    console.log(localStorage)
  }
  
  function saveList() {
    localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, JSON.stringify(todos));
  }
