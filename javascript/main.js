"use strict";
const LOCAL_STORAGE_KEY =  "app.todos";
let listStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

function CreateNote() {
    let text = document.getElementById('textbox').value;
    if (text.trim() != "")
    {
        var position = document.getElementById('list');
        position.insertAdjacentHTML('beforeend', '<li>'+text+'</li>');
        listStorage = ('beforeend', '<li>'+text+'</li>')
        updateList();
    }
}

function DeleteNote()
{
    let node = document.getElementById("list");
    let child = event.target;
    //let child = node.querySelector(selectors);
    let throwawayNode = node.removeChild(child);
    let listStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    updateList();
}

function updateList() {
    saveList();
    var position = document.getElementById('list');
    //while (position.firstChild) {
    //    position.removeChild(position.firstChild);}
    position.insertAdjacentHTML('beforeend', listStorage);
    console.log(localStorage)


  }
  
  function saveList() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listStorage));
  }

  addEventListener("click", DeleteNote)
  updateList();