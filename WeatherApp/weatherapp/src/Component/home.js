import React,{useState,useEffect} from 'react';
import Header from './header'
import Footer from './footer'
import axios from 'axios';
import './css/home.css';
function Home(){
    var [data,setData]=useState([{}]);
    var [inp,setInp]=useState("");
    useEffect(()=>{
        axios.get(country("in")).then((res)=>{
            setData(res.data.articles);
            console.log(res.data.articles);
            document.getElementById("inpid").value="in";
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
   
    return(
    <div>
        <Header />
        <div className='searchdiv'>
            <input className='input' type="text" id="inpid"  onChange={setinpp}/>
            <button className='button' onClick={adddata}>Search</button>
        </div>

        <div className='parentcardview'>
        {
            data.map((d)=>
            <div className='cardview'>
                <div className='viewmore' id='viewmoreid'>view more</div>
                <img className='cardimage' src={d.urlToImage} />
                <p className='cardtitle'>{d.title}</p>
            </div>
            )
        }
        
        {/* <div className='cardview'>
            <div className='viewmore' id='viewmoreid'>view more</div>
            // <img className='cardimage' src="data:image/jpeg;base64,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" />
            <p className='cardtitle'>d.title</p>
        </div>
        <div className='cardview'>
            <div className='viewmore' id='viewmoreid'>view more</div>
            // <img className='cardimage' src="data:image/jpeg;base64,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" />
            <p className='cardtitle'>d.title</p>
        </div>
        <div className='cardview'>
            <div className='viewmore' id='viewmoreid'>view more</div>
            <img className='cardimage' src="data:image/jpeg;base64,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" />
            <p className='cardtitle'>d.title</p>
        </div>
        <div className='cardview'>
            <div className='viewmore' id='viewmoreid'>view more</div>
            <img className='cardimage' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAoQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xAA/EAABAwIDBQQGBwYHAAAAAAABAAIDBBESITEFE0FRYQYiMnEUQoGRobEHFVJi0eHwIzM0cnOSFjZVg7PBwv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACERAQEAAgEFAQEBAQAAAAAAAAABAhEDEhMhMVFBMmEi/9oADAMBAAIRAxEAPwD2IMSLFZEaW7V7RpVwJt2re7TbtGxpU3aExq5u026T2NKRjQGNXTGhMfRGxpQdGo3Rq+WIHMT2NM90fRROjWiY1E6NPZM50aidGtF0aidGnsM90aidGtB0aidEq2Sg6NAWK86NROjT2SmWKNzFeLFG5iNkp4ElYwBJPZPRbJJJLkdBJJJIBWTWTpIBi0ISwI0kBC6JRuj6K0mIunstKRj6KN0avuYCo3RI2NM90fRROj6LRdGonRJ9Q0z3RdFE6LotF0ajdEn1Fpmui6KtWSQ0lNLUVLxHFE0ve46ABazol5r9MG1jTUcGyYiQZhvprG3cBsB7Tc+xLLk1GvDw9zOYuN7R9vNqV9U9tBO6jpQe4yOwc4cy7X2DL5rFPabbZdi+tqy/9UrHc67szclAXWcsOrL69Tt8ePiSOg/xd2h/1ab+1v4JLDy5pI68vp9vD5H2Qx7Xi7HNcOYN0S+etmVtTs+pZW0U7o5WG4LcsuRGhXXD6SNtYgfRKJzDbwscfP1l0XCx40u3q6S5Ls725oNqPFPVt9EqTYNDnXY4ngDz6FdZdQZ0kAe1wNjexsbcEV0twHSQ3HNK45pdU+gSSHEOaWIc0deP0aEkUGMJYxzU3lw+nqnIBQOaEjIBxCEytGpCyvLj+HqhcxRuYjdMy2qjdM3ml3ouYWgdGvAPpmqTL2ymhYcoYo2O/tDv/a99dOOq+b/pQ2pQ1vbLaFRs6UVLJN2HPA7oLWNaQDx8OqcyuXiOjhuPHbcvHhyD5C04iEG8vc2yOiaSXG65B6DkkHt9ZntWvSruS334Hj6pIMbOaSNDuT67ynrN7CDaz2kYgOWYU8dWyGUh5GEi7rDX2LEo3vjY82FjkOet1PTRBr3TVD7k2Fw61l3vLblPW09Tm2Q4h6rhYjhdaDNs7Sgi3bdpVAjAs1jZjYfFcaIxvS1rgLuxMPQq3DWHutkeLnQ62Km4y+4qZWOgodr1tBWNm2fPJFJfMB3dl6OHHiu82d2rjrYWGWpdTTEd6OR1gDxsdCvJ3VEmJzmHCGWc0aIm1LXBrzc2NyAVGXDjkqcmUerv7V0bJMH1iTzIDiPkrbNrtnaHRVweCLi0gzXDbF7T0AtBteFu9aLNnwgNeOoyt8vJdBDUg5Q0eKPQbm9gPJY9rGfi+5W56e8a1ZHnIEhtF9sqsG33wsMYjI4Gge37zWg/MI3vkYwkUlRI3TC829wsl28T68m0a+bK1RrpY6qN1fPpvviFjvxwxteyOGN7hnvXZj3BZ8zq0k42Ur4zxDgB79U5w4leXJu1W16qH902abrG5th7yqkm2qm2Ix1gd9m7fxWfBvbhwFOCBkTOT8CVMd7m6aptyDRkqnFhPwu5l9WY9qTzC7vSmdH5fIrP2z2jh2TFjq6iS5F2xtILnDpn8Uck8cUbnyvxhrS4k2sANeC8b23Xvq66WZxc0SOLgwuJwjgLnoozkx9Rtwy5ecr4b23+3e1auV7aGpNLTOyDQAXkWzu4+3Sy415vKXHRxunad48XOSiLsTkTxBlZcvAnFDdNbNJJW9iv1SQpJh19cTDVOdbC2wDB15+z8FBHJipX7w5MfZueZOdlo7Sg3jd5fDgbyvkqc8O72fGTq95dou1wK5OHCGO8JNgT10Uk0bi1sgu12YeD6p/O6iEZ7t7G+djorkVS1soL2XY4APba97frJSoqaofLLGyZ13tya89ealrhHTXjjBxF2K59UDh70JY2DE6Nm8Y7MFwuMPTkVNtR7Zg026jyITJRbIXz98nvZ5jTLNaFLtevgjjY2ol3LRdrBIcgT+slVoooy8OkfZpNiVtMgojCAwiTDpfKym2K0m2d2gqhUDfVDyy2VwNVv021J5gcLnFvF19FzMDaNk15XsP3QMls009OD3WtDeVlFv8Ahrk801RaNspNzxCuR0OCIGStc06uDWj8VVNVBJbQEaKtUzZd2VHkNX0eN47lSbcrNQeghpBNY4Di0DX4rnDVljvGbH2KyK5pFr59VWqW4g7Yy09BsiQQzPdLO7ABoAOP66ryyqkMknTQLre29djlp42Z4WFx9py+RXIMs6Vt+JXLl/dduE1xSfQPuLagDIdUk9TM6QRsIAbGLADzuT55oS4E5aKvxjL/ANHbqETmhrdTi5IClc8yk0MkkkkHoNTG2ZhY72+SrTFkwcS0OjZYNBUxNgHOOXE9FGaQv3ccNyy9ySu6uCJKBsEp8DeuWisujgMzWhosNLIfQmxtADj1U0FNHE4OkNz1Kzq1aqp54nWDLxPNrg3I6rMYZLugmJxxZg63b+iukqKuBoFzYKl9ZUrL7pgvzCJTc5M4xQtaRcgXy9W5/QUQqH6B5y6rV2g5jw6XdAOwkOyz1usXB+0w3DfNFJYjq5Dlcud6vFSDaFQG4mSOvxHTmqbonNNw8G3EJ4Q6SQljgZLHI5X8kG0qbalQwk3Jy4lXYdrl8f7R1nXXNOe5ji03FuBSEh4FBN5+1QHkEX6hB9cZ+ErPpwJAA8lpOV/yQz0ErDkMQ5tN09jSttiqdVVGMtLWlow4unJZtzlbUG91cr3EnBqGC11Ua4NY7FxK5Jd3buympIhvcqR7Q1+RUXFTPILsuSpz4+wpJImEBwJFwOCTen3T+SSP0p33fcnQnbvxBYd7OyMSiJpDG281Kb8Gn2KGVshzacvsubmu7TgQTzuI7l8R5Z2VSOoleLynC4ZaK05khdcxC3kfxQ94C26abcyRdT0ntQmkfPEQ6QYmHS+dvJVt+Y8ibEaFbMVC6skwQ0LpXjiwEe8/itSn7ERygOqnmA/ZjOIj/r5qbJFxyUdY17pGyd4yCw81BWSFjd5IQ0O7ueVsl6TSdj9h01nOpXTvB8U0hPwFh8FsRU1JD+6pYGW4tjAU7PTw58oafGwXz8SZr2uNhI0nhYr3nG21sIt5IbRE3MbL/wAoSN4pG+CtDGvmbvxle/iCj3cQJDXXcObl7hhi4MZ/aFy/0iRAdnnTxPdC+KVlt33ceI4SDbzv7EdQ081tIAX2cWt1cBp5rT2btDeujgeDe9mOWCS917vcRle5UljH4beYU9Q0qSVD3RsYSbAa80zsW5A9Um6jktiNlrSRuOxKGUsBj3sjC6+d7g292ftWcjS5W+2TYp7FSEtsbDVDdFGPsOae6dMRkiLy8FiHJJDh806bJ2FNtmpiGB95srhztVbZtpr/ABRujP8ALiA+Ky9nfxbfJ3yKsy+Om8mrplumVjo9nUtTtJgfTEOjv4zEWj3krepdiU8QBqHGVw4aN/NacP8ACw/0whOqnqtOYwTcMbQ2NoY0aBosAhMluZTcUPBSoWO6WIpmohqmA3PBRyylnUqw7RUZf3pRCV5JSZMb83DTosjt7I6Xsw7PwzRk59fzWvP4X+Sxe1n+U6jzi/5Gp30U9vNgCMjxSf3RrqOaaXwvUU3iWVWgcM81ahc8wFpc7AHkht8rka255KvKrcH8H/uJY/0LPCGSMt00UQ1VxyrHUqs8ZPQ4s7l4oSnblYoSibos41s3R4x9lJCkqZv/2Q==" />
            <p className='cardtitle'>d.title</p>
        </div>
        <div className='cardview'>
            <div className='viewmore' id='viewmoreid'>view more</div>
            <img className='cardimage' src="data:image/jpeg;base64,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" />
            <p className='cardtitle'>d.title</p>
        </div>
        <div className='cardview'>
            <div className='viewmore' id='viewmoreid'>view more</div>
            <img className='cardimage' src="data:image/jpeg;base64,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" />
            <p className='cardtitle'>d.title</p>
        </div>
        <div className='cardview'>
            <div className='viewmore' id='viewmoreid'>view more</div>
            <img className='cardimage' src="data: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" />
            <p className='cardtitle'>d.title</p>
        </div> */}
        </div> 
        {/* <Footer /> */}
    </div>
    )
}

export default Home;