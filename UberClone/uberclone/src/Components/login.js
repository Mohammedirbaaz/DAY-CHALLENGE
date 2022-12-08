import React,{useState,useEffect} from 'react';
import Header from './header';
import Footer from './footer';
import './css/login.css';
function Login(){
    useEffect(()=>{
        
    });
    return(
        <div className='bgdesign'>
            <Header/>
                <div className='logindiv'>
                    <div className='login_header'>Login</div>
                    <div className='login_form'>
                        <input type="text" className='inp_submit'/>
                        <input type="password" className='inp_submit'/>
                        <input type="submit" className='inp_submit2' />
                    </div>
                </div>
        </div>)
}

export default Login;