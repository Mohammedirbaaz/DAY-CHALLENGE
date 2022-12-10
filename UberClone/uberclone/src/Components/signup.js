import React,{useState,useEffect} from 'react';
import Header from './header';
import Footer from './footer';
import vehicle from '../images/vehicle.png'
import './css/login.css';
function Signup(){
    useEffect(()=>{
        
    });
    function typeofclient(types){
        if(types=='passenger'){
            document.getElementById("passengerid").style.display="block";
            document.getElementById("deciderid").style.display="none";
            document.getElementById("cabdriverid").style.display="none";
        }else{
            document.getElementById("passengerid").style.display="none";
            document.getElementById("deciderid").style.display="none";
            document.getElementById("cabdriverid").style.display="block";
        }
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
                        <input type="text" className='inp_submit' placeholder='Full Name'/>
                        <input type="text" className='inp_submit' placeholder='Mailid'/>
                        <div className='gender'>
                            <input type="radio" name='gender' className='inp_submit' />
                            <label>Male</label>
                            <input type="radio" name='gender' className='inp_submit'/>
                            <label>Female</label>
                            <input type="radio" name='gender' className='inp_submit'/>
                            <label>Others</label>
                        </div>
                        <input type="text" className='inp_submit' placeholder='Phno'/>
                        <input type="password" className='inp_submit' placeholder='Password'/>
                        <input type="password" className='inp_submit' placeholder='Confirm Password'/>
                        <input type="submit" className='inp_submit2' />
                    </div>
                </div>




                <div className='logindiv' id="cabdriverid">
                    <div className='login_header'>Register</div>
                    <div className='login_form'>
                        <input type="text" className='inp_submit' placeholder='Full Name'/>
                        <input type="text" className='inp_submit' placeholder='Mailid'/>
                        <div className='gender'>
                            <input type="radio" name='gender' className='inp_submit' />
                            <label>Male</label>
                            <input type="radio" name='gender' className='inp_submit'/>
                            <label>Female</label>
                            <input type="radio" name='gender' className='inp_submit'/>
                            <label>Others</label>
                        </div>
                        <input type="text" className='inp_submit' placeholder='Vehicle No'/>
                        <input type="text" className='inp_submit' placeholder='License No'/>
                        <input type="text" className='inp_submit' placeholder='Phno'/>
                        <input type="password" className='inp_submit' placeholder='Password'/>
                        <input type="password" className='inp_submit' placeholder='Confirm Password'/>
                        <div className='vehicleimage'>
                            <label>Vehicle Photo</label>
                            <input type="file"  accept="image/x-png,image/jpeg" />
                        </div>
                        <input type="submit" className='inp_submit2' />
                    </div>
                </div>
        </div>
        )
}

export default Signup;