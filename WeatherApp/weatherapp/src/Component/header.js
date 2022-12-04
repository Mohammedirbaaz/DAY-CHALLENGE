import React,{useState} from 'react';
import './css/header.css';

function Header(props){
    var [status,setStatus]=useState("SignUp");
    console.log(props);
    return(
    <div className='Headerhead'>
        <h3 className='child2'>Weather App</h3>
        <img className='child' src='https://img.icons8.com/fluency/50/null/clouds.png'/>
        <div className='auth'>
            <h3 className='child2'></h3>
        </div>
    </div>
    )
}
export default Header;