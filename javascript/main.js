"use strict";
addEventListener("click", DeleteNote)

function CreateNote() {
    let text = document.getElementById('textbox').value;
    if (text.trim() != "")
    {
        var position = document.getElementById('list');
        position.insertAdjacentHTML('beforeend', '<li>'+text+'</li>');
    }
}

function DeleteNote()
{
    let node = document.getElementById("list");
    let child = event.target;
    //let child = node.querySelector(selectors);
    let throwawayNode = node.removeChild(child);
}