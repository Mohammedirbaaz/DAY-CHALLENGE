import React,{useState,useEffect} from 'react';
import Header from './header';
import Footer from './footer';
import vehicle from '../images/vehicle.png'
import axios from 'axios';
import './css/login.css';
function Signup(){
    const [accounttype,setAccountType]=useState("");
    const [name,setName]=useState("");
    const [mailid,setMailid]=useState("");
    const [gender,setGender]=useState("");
    const [phno,setPhno]=useState("");
    const [password,setPassword]=useState("");
    const [cpassword,setCPassword]=useState("");
    const [vehicle,setVehicle]=useState("");
    const [license,setLicense]=useState("");
    useEffect(()=>{
        
    });
    function typeofclient(types){
        if(types=='passenger'){
            setAccountType("passenger");
            document.getElementById("passengerid").style.display="block";
            document.getElementById("deciderid").style.display="none";
            document.getElementById("cabdriverid").style.display="none";
        }else{
            setAccountType("cabdriver");
            document.getElementById("passengerid").style.display="none";
            document.getElementById("deciderid").style.display="none";
            document.getElementById("cabdriverid").style.display="block";
        }
    }
    function onsubmit(){
        var obj;
        if(accounttype=="passenger"){
            obj={
                name:name,
                mailid:mailid,
                gender:gender,
                phno:phno,
                password:password,
                accounttype:accounttype
            }
            console.log(obj);
        }else{
            obj={
                name:name,
                mailid:mailid,
                gender:gender,
                phno:phno,
                password:password,
                license:license,
                vehicle:vehicle,
                accounttype:accounttype
            }
            console.log(obj);
        }
        axios.post("http://localhost:5000/register",obj).then(res=>{
            console.log(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }
    return(
        <div className='bgdesign'>
            <Header/>
                <div className="decider" id="deciderid">
                    <p className='decider_child'  onClick={()=>typeofclient("passenger")}>
                        Be a Passenger?
                    </p>
                    <p className="decider_child"  onClick={()=>typeofclient("cabdriver")}>
                        Be a Cab Driver?
                    </p>
                </div>
                <div className='logindiv' id="passengerid">
                    <div className='login_header'>Register</div>
                    <div className='login_form'>
                        <input type="text" className='inp_submit' placeholder='Full Name' onChange={(e)=>setName(e.target.value)}/>
                        <input type="text" className='inp_submit' placeholder='Mailid' onChange={(e)=>setMailid(e.target.value)}/>
                        <div className='gender' onChange={(e)=>{setGender(e.target.value);console.log(e.target.value)}}>
                            <input type="radio" name='gender' value="Male" className='inp_submit' />
                            <label>Male</label>
                            <input type="radio" name='gender' value="Female" className='inp_submit'/>
                            <label>Female</label>
                            <input type="radio" name='gender' value="Others" className='inp_submit'/>
                            <label>Others</label>
                        </div>
                        <input type="number" className='inp_submit' placeholder='Phno' onChange={(e)=>setPhno(e.target.value)}/>
                        <input type="password" className='inp_submit' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                        <input type="password" className='inp_submit' placeholder='Confirm Password' onChange={(e)=>setCPassword(e.target.value)}/>
                        <input type="submit" className='inp_submit2' onClick={onsubmit}/>
                    </div>
                </div>

                <div className='logindiv' id="cabdriverid">
                    <div className='login_header'>Register</div>
                    <div className='login_form'>
                        <input type="text" className='inp_submit' placeholder='Full Name' onChange={(e)=>setName(e.target.value)}/>
                        <input type="text" className='inp_submit' placeholder='Mailid' onChange={(e)=>setMailid(e.target.value)}/>
                        <div className='gender' onChange={(e)=>setGender(e.target.value)}>
                            <input type="radio" name='gender' value="Male" className='inp_submit' />
                            <label>Male</label>
                            <input type="radio" name='gender' value="Female" className='inp_submit'/>
                            <label>Female</label>
                            <input type="radio" name='gender' value="Others" className='inp_submit'/>
                            <label>Others</label>
                        </div>
                        <input type="text" className='inp_submit' placeholder='Vehicle No' onChange={(e)=>setVehicle(e.target.value)}/>
                        <input type="text" className='inp_submit' placeholder='License No' onChange={(e)=>setLicense(e.target.value)}/>
                        <input type="number" className='inp_submit' placeholder='Phno' onChange={(e)=>setPhno(e.target.value)}/>
                        <input type="password" className='inp_submit' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                        <input type="password" className='inp_submit' placeholder='Confirm Password' onChange={(e)=>setCPassword(e.target.value)}/>
                        <div className='gender'>
                            <label >Vehicle Photo</label>
                            <input type="file"  accept="image/x-png,image/jpeg" />
                        </div>
                        <input type="submit" className='inp_submit2' onClick={onsubmit} />
                    </div>
                </div>
        </div>
        )
}

export default Signup;