import React,{useState,useEffect} from 'react';
import Header from './header'
import Footer from './footer'
import axios from 'axios';
import './css/home.css';
function Home(){
    var [data,setData]=useState([{}]);
    var [inp,setInp]=useState("");
    useEffect(()=>{
        axios.get(country("us")).then((res)=>{
            setData(res.data.articles);
            console.log(res.data.articles);
        }).catch(err=>{
            alert(err);
        })
    },[])

    function setinpp(e){
        setInp(e.target.value);
    }
    function adddata(){
        var url=country(inp);
        axios.get(url).then((res)=>{
            setData(res.data.articles);
            console.log(res.data.articles);
        }).catch(err=>{
            alert(err);
        })
    }

    function country(country){
        var url="https://newsapi.org/v2/top-headlines?country="+country+"&apiKey=7350b07af3594a0cbad391b4dba2db06";
        return url;
    }

    function company(company){
        var url="https://newsapi.org/v2/top-headlines?country="+company+"&apiKey=7350b07af3594a0cbad391b4dba2db06";
        return url;
    }
    // console.log(data);
    return(
    <div>
        <Header />
        <div className='searchdiv'>
            <select className='select'>
                <option>country</option>
                <option>company</option>
            </select>
            <input className='input' type="text"  onChange={setinpp}/>
            <button className='button' onClick={adddata}>Search</button>
        </div>

        <div className='parentcardview'>
        {
            data.map((d)=>
            <div className='cardview'>
                <img className='cardimage' src={d.urlToImage} />
                <p className='cardtitle'>{d.title}</p>
                {/* <p className='carddesc'>{d.content}</p> */}
            </div>
            )
        }
        </div> 
        
        {/* <Footer /> */}
    </div>
    )
}

export default Home;