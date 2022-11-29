import './css/dashboard.css';
import React,{useEffect, useState} from 'react';
import axios from 'axios';

function DashBoard() {
  var [data,setData]=new useState([]);

  useEffect(()=>{
      axios.get('http://localhost:5000/').then((res)=>{
      setData=res.data;
      var f=addlayout(res.data,1);
      console.log(f);
     }).catch((er)=>{
      console.log(er);
     });
  });
  
  function checkfield(){
    var choosed_option=document.getElementById("operations").value;
    var btn=document.getElementById("btnid");
    switch(choosed_option){
        case "Add":
            btn.innerHTML="Add";
            btn.style.backgroundColor="rgb(133, 197, 253)";
            break;
        case "Search":
            btn.innerHTML="Search";
            btn.style.backgroundColor="rgb(255, 199, 131)";
            break;
        case "Delete":
            btn.innerHTML="Delete";
            btn.style.backgroundColor="red";
            axios.get('http://localhost:5000/delete_notes').then(res=>{console.log("DELETED")}).catch(e=>{console.log(e)})
            break;
        default:
            btn.innerHTML="Add";
            btn.style.backgroundColor="rgb(133, 197, 253)";
            break;
    }
  }

  function check(){
    if(!document.getElementById("oldestid").checked){
        var arr=document.getElementById("bodydivid").childNodes.length;
        // console.log(arr);
        for(var i=1;i<arr.length;i++){
            document.getElementById("bodydivid").removeChild(arr[i]);
        }
    }else if(document.getElementById("latestid").checked){

    }else{

    }
  }

  function addlayout(arr,dir){
    // console.log(arr);
    var finalarr=new Array();
    for(var i=0;i<arr.length;i++){
      var element;
      if(dir==0){
        element=document.getElementById("textval");
        if(element.value=="") return;
      }else{
        element=arr[i].notes;
        if(element=="") return;
      }
      var curdate=new Date().toLocaleDateString()+"-"+new Date().getHours() + ":" + new Date().getMinutes();

      var parent=document.createElement("div");
      parent.setAttribute("class","content");
  
      var datetime=document.createElement("div");
      datetime.setAttribute("class","datetime");
      
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
  

      notesvalue.appendChild(document.createTextNode( (dir==0) ? element.value  : arr[i].notes));
      parent.appendChild(notesvalue);
  
      document.getElementById("bodydivid").appendChild(parent);

      if(dir==0){
        element.value="";
      }


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
      finalarr.length+=1;
      finalarr[finalarr.length-1]=parent;
      console.log(parent);
    }
    return finalarr;
  }

  function add(){
    

    const notesvalf=document.getElementById("textval").value;
    var curdate=new Date().toLocaleDateString()+"-"+new Date().getHours() + ":" + new Date().getMinutes();
    const notesdate=curdate;
    //new date to be returned
    const obj={
      notes:notesvalf,
      date:notesdate,
      fav:false
    }
    axios.post("http://localhost:5000/add_notes",obj).then((data)=>{
      var parent=addlayout(new Array(data.data),0);
      parent[0].setAttribute("id",data.data._id);

    }).catch(e=>{
      console.log(e)
    })
  }

  return (
    <div className="main" >
			<div className="commondiv">
				<p className="headtitle">TO DO LIST</p>
			</div>
			<div className="commondiv searchdiv">
				<div className="selection">
					<select name="operations" className="operations" id="operations" onChange={()=>checkfield()}>
						<option value="Add">Add</option>
						<option value="Search">Search</option>
						<option value="Delete">Delete</option>
					</select>
				</div>
				<div className="search">
					<textarea className="searchbox" placeholder="text" id="textval"></textarea>
				</div>
				<div className="submit">
					<button className="submitbutton" onClick={()=>{add()}}  id="btnid">Add</button>
				</div>
			</div>

      {/* <div class="commondiv radiobtn" >
					<form onChange={()=>check()}>
            <input type="radio" id="oldestid" name="filter" value="Oldest"> Oldest</input>
            <input type="radio" id="latestid" name="filter" value="Latest"> Latest</input>
            <input type="radio" id="datespecificid" name="filter" value="DateSpecific" > Date Specific</input>
          </form>
			</div> */}

      <div className="commondiv" id="bodydivid">
        <div className="content">
          <div className="datetime">11/12/2022-12:78</div>
            <div className="functions1">
              <img className="icons1"   src="https://img.icons8.com/material-outlined/15/black/pencil-tip.png"/>
              <img className="icons1" src="https://img.icons8.com/material-outlined/15/black/hearts.png"/>
              <img className="icons1" src="https://img.icons8.com/material-outlined/15/black/trash--v1.png"/>
            </div>
            {/* <input type="text" style="display:block;" className="notesvalue1 notesvalue" /> */}
            <p className="notesvalue">hello all good evening to all of you please read this message fully</p>
          </div>
			</div>
		</div>
  );
}
export default DashBoard;