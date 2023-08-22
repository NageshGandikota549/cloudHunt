import React, { useState } from "react";
import './Register.css'

const defaultUserDetails = {
    email:'',
    password:'',
    dob:'',
    age:''
  }

export function Register() {
  
  const[userRegistrationdetails,setuserRegistrationdetails] = useState(defaultUserDetails);
  const handleChange = (event) => {
    setuserRegistrationdetails({ ...userRegistrationdetails, [event.target.id]: event.target.value }); 
  };
  
const handleSubmit=(event)=>{
  event.preventDefault();
  console.log("Form submitted with data:", userRegistrationdetails);
}
  
const handleReset=()=>{
  setuserRegistrationdetails(defaultUserDetails);
};

  return (
  <div classname="main-register"><center>      
    <h1 className="head-part">Registration page</h1>
      <form onSubmit={handleSubmit}>
          <div className='email'>
            <label className="email-label"htmlFor='email'>Email:  </label>
              <input classsName="email-label"className="violet-border"
              id='email'
              type="text"  
              value={userRegistrationdetails.email}
              onChange={handleChange}
            />          
            </div><br/>
            <div className='username'>
            <label className="violet-border"htmlFor='username'>Username:  </label>
              <input className="username-field"
              id='username'
              type="text"  
              value={userRegistrationdetails.username}
              onChange={handleChange}
            />          
            </div><br/> 
          <div className='password'>
            <label className="password-label" htmlFor='password'>Password:   </label>
              <input className="password-field"
              id='password'
                type="password"
              value={userRegistrationdetails.password}
              onChange={handleChange}
              />
            </div><br/>
            <div className='dob'>
            <label className="dob-label"htmlFor='dob'>DOB:   </label>
              <input className="dob-field"
              id='dob'
                type="date"
              value={userRegistrationdetails.date}
              onChange={handleChange}
              />
            </div><br/>
            <div className='age'>
            <label className="age-label" htmlFor='age'>Age:   </label>
              <input className="age-field"
              id='age'
                type="number"
              value={userRegistrationdetails.age}
              onChange={handleChange}
              />
            </div><br/>
        
            <div className="btn-container">            
              <button className="btn-cancel"type="button" onClick={handleReset}>Cancel</button>           
              <button className="btn-submit" type="submit" >Register</button><div className="button-space"/>
            </div>
          </form></center>
          </div>

  
     );
};
