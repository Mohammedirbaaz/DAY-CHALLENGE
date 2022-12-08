import React,{useState,useEffect} from 'react';
import Header from './header';
import Footer from './footer';
function Home(){
    useEffect(()=>{
        console.log("lol");
    });
    return(
        <div>
            <Header/>
        </div>)
}

export default Home;