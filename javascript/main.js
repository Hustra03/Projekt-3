let notes=0;

function CreateNote() {
    notes+=1;
    let text = document.getElementById('textbox').value;
    var position = document.getElementById('inputdiv');
    let textid = "lapp" + notes
    position.insertAdjacentHTML('beforebegin', '<div class="lapp" id="'+textid+'"><p>'+text+'</p></div>');
    
}

function DeleteNote()
{
    let number = document.getElementById('deleteNumber').value;
    let node = document.getElementById('lappar');
    let child = document.getElementById('lapp');
    node.removeChild(child);

    let d = document.getElementById("top");
    let d_nested = document.getElementById("nested");
    let throwawayNode = d.removeChild(d_nested);

}