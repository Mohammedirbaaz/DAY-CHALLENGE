import React,{useState,useEffect} from 'react';
import './css/header.css';

function header(){
    function showmenu(){
        var childs=document.getElementById('smallmenuid');
        var menu=document.getElementById('menuid');
        if(childs.style.display=="block"){
            childs.style.display="none";
            menu.setAttribute("src","https://img.icons8.com/ios-filled/30/FFFFFF/menu-rounded.png");
        }else{
            childs.style.display="block";
            menu.setAttribute("src","https://img.icons8.com/ios-filled/30/FFFFFF/delete-sign--v1.png");
        }
    }
    return(
        <div className='header'>
            <div className='title'>Uber</div>
            <div className='navbar'>
                <p className='child'>Login</p>
                <p className='child' >Sign Up</p>
                <p className='child'>About</p>
            </div>

            <div className='smallmenu' id="smallmenuid">
                <p className='childmenu'>Login</p>
                <p className='childmenu' >Sign Up</p>
                <p className='childmenu'>About</p>
                
            </div>
            <div className='menubar' onClick={showmenu}><img id="menuid" src="https://img.icons8.com/ios-filled/30/FFFFFF/menu-rounded.png"/></div>
        </div>)
}

export default header;