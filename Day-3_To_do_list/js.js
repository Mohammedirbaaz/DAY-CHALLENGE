var isclickedit=false;
function checkfield(){
    var choosed_option=document.getElementById("operations").value;
    var btn=document.getElementById("btnid");
    switch(choosed_option){
        case "Add":
            btn.innerHTML="Add";
            btn.style.backgroundColor="rgb(133, 197, 253)";
            // document.body.style.backgroundColor="rgb(133, 197, 253)";
            break;
        case "Search":
            btn.innerHTML="Search";
            btn.style.backgroundColor="rgb(255, 199, 131)";
            // document.body.style.backgroundColor="rgb(255, 199, 131)";
            break;
        case "Delete":
            btn.innerHTML="Delete";
            btn.style.backgroundColor="red";
            // document.body.style.backgroundColor="red";
            break;
        default:
            break;
    }
}
function add(){
    var element=document.getElementById("textval");
    if(element.value=="") return;

    var parent=document.createElement("div");
    parent.setAttribute("id",new Date().getTime());
    parent.setAttribute("class","content");

    var datetime=document.createElement("div");
    datetime.setAttribute("class","datetime");
    datetime.appendChild(document.createTextNode(new Date().toLocaleDateString()+"-"+new Date().getHours() + ":" + new Date().getMinutes()));    
    parent.appendChild(datetime);

    var functions1=document.createElement("div");
    functions1.setAttribute("class","functions1");
    
    
    var icons1=document.createElement("img");
    var icons2=document.createElement("img");
    var icons3=document.createElement("img");

    icons1.setAttribute("class","icons1");
    icons1.setAttribute("src","https://img.icons8.com/material-outlined/15/black/pencil-tip.png");
    icons1.setAttribute("id","editid");

    icons2.setAttribute("class","icons1");
    icons2.setAttribute("src","https://img.icons8.com/material-outlined/15/black/hearts.png");
    icons2.setAttribute("id","likeid");

    icons3.setAttribute("class","icons1");
    icons3.setAttribute("src","https://img.icons8.com/material-outlined/15/black/trash--v1.png");
    icons3.setAttribute("id","deleteid");

    functions1.appendChild(icons1);
    functions1.appendChild(icons2);
    functions1.appendChild(icons3);
    parent.appendChild(functions1);
    
    var notesvalue=document.createElement("p");
    notesvalue.setAttribute("class","notesvalue");
    notesvalue.setAttribute("id","notesvalueid");

    notesvalue.appendChild(document.createTextNode(element.value));
    parent.appendChild(notesvalue);

    document.getElementById("bodydivid").appendChild(parent);
    element.value="";
    //EVENT DELEGATION
    parent.addEventListener("click",(e)=>{
        if(e.target.id=="editid" && !isclickedit){
            isclickedit=true;
            e.target.setAttribute("src","https://img.icons8.com/small/15/black/approval.png")

            var common=e.target.parentElement.parentElement;
            var val=common.childNodes[2].textContent;
            var notesval=common.childNodes[2];
            common.removeChild(notesval);

            var newinput=document.createElement("input");
            common.appendChild(newinput);
            newinput.setAttribute("class","notesvalue");
            
            newinput.style.display="block";
            newinput.setAttribute("value",val);
            newinput.focus();  
            newinput.addEventListener("mouseleave",()=>{
                var notesvalue=document.createElement("p");
                notesvalue.setAttribute("class","notesvalue");
                notesvalue.setAttribute("id","notesvalueid");
                notesvalue.innerHTML=newinput.value;
                common.replaceChild(notesvalue,newinput);       
                isclickedit=false;         
            })
        }else if(e.target.id=="deleteid"){
            var maincontent=document.getElementById("bodydivid");
            var common=e.target.parentElement.parentElement;          
            maincontent.removeChild(common);
        }
    });
}
