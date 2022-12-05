import React,{useState} from 'react';
import './css/header.css';

function Header(props){
    var [status,setStatus]=useState("SignUp");
    
    return(
    <div className='Headerhead'>
        <h3 className='child2'>Weather App</h3>
        <img className='child' src='https://img.icons8.com/fluency/50/null/clouds.png'/>
        <p>Login</p>
    </div>
    )
}
export default Header;