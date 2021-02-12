"use strict"; //använd modern javascript

const LOCAL_STORAGE_KEY_TODOS =  "app.todos";
let todos  = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TODOS)) || [];
let listRoot = document.getElementById('list');
let x=0;
listRoot.addEventListener("click", DeleteNote)


function CreateNote(text) {
    if (text.trim() != "")
    {
        let todoListItem = document.createElement("li");
        todoListItem.innerText = text;
        todoListItem.classList.add("textitem");
        listRoot.append(todoListItem)
        todos = listRoot.innerHTML;
        updateList();
    }
}

function DeleteNote(event)
{
    let child = event.target;
    listRoot.removeChild(child);
    todos = listRoot.innerHTML;
    updateList();
  }

  function createElementFromHTML(htmlString) {
    listRoot.innerHTML = htmlString;
  }

function updateList() {
    saveList();
    console.log(todos)
    createElementFromHTML(todos)

  }
  
  function saveList() {
    localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, JSON.stringify(todos));
  }

updateList()