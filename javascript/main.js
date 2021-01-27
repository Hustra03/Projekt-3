function CreateNote(params) {
    let text = document.getElementById('textbox').value;
    var para = document.createElement("P");
    var t = document.createTextNode("This is a paragraph.");
    para.appendChild(t);
    document.getElementById('Lappar').appendChild(newContent);
    const help = document.getElementById("help");
    const textbox = document.getElementById("textbox");
    document.body.insertBefore(help,textbox);




}