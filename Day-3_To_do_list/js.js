function add(){
    var el=document.getElementById("textval");
    if(el.value=="") return;
    var parent=document.createElement("div");
    var text=document.createTextNode(el.value);
    parent.appendChild(text);
    parent.setAttribute("class","notesvalue");
    var gparent=document.getElementById("bodydivid");
    gparent.appendChild(parent);
    el.value="";
}