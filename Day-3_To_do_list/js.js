var arr=new Array();
var i=0;
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
    document.getElementById("oldestid").checked = true;
}
function add(){
    var element=document.getElementById("textval");
    if(element.value=="") return;
    var ids=new Date().getTime();
    var parent=document.createElement("div");
    parent.setAttribute("id",ids);
    parent.setAttribute("class","content");

    var datetime=document.createElement("div");
    datetime.setAttribute("class","datetime");
    var curdate=new Date().toLocaleDateString()+"-"+new Date().getHours() + ":" + new Date().getMinutes();
    datetime.appendChild(document.createTextNode(curdate));    
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
    
    arr[i]=new Array(3);
    arr[i][0]=element.value;
    arr[i][1]=ids;
    arr[i][2]=curdate;
    i++;
    console.log(arr);
    element.value="";
    //EVENT DELEGATION
    parent.addEventListener("click",(e)=>{
        if(e.target.id=="editid" ){
            if(e.target.src=="https://img.icons8.com/material-outlined/15/black/pencil-tip.png"){
                e.target.setAttribute("src","https://img.icons8.com/small/15/black/approval.png")
                var common=e.target.parentElement.parentElement;
                var val=common.childNodes[2].textContent;
                var notesval=common.childNodes[2];
                common.removeChild(notesval);

                var newinput=document.createElement("textarea");
                common.appendChild(newinput);
                newinput.setAttribute("class","notesvalue notesvalue1");
                
                newinput.style.display="block";
                newinput.innerHTML=val;
                newinput.focus();  
            }else{
                e.target.setAttribute("src","https://img.icons8.com/material-outlined/15/black/pencil-tip.png")
                var common=e.target.parentElement.parentElement;
                var notesvalue=document.createElement("p");
                notesvalue.setAttribute("class","notesvalue");
                notesvalue.setAttribute("id","notesvalueid");
                notesvalue.innerHTML=common.childNodes[2].value;
                common.replaceChild(notesvalue,common.childNodes[2]);  
            }
        }else if(e.target.id=="deleteid"){
            var maincontent=document.getElementById("bodydivid");
            var common=e.target.parentElement.parentElement;          
            maincontent.removeChild(common);
        }
    });
}

function check(){
    document.getElementById("bodydivid").remove();
}