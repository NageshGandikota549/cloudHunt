import React, { useState } from "react";
import './Register.css'
export function Register ()  {
  const[userRegistrationdetails,setuserRegistrationdetails]=useState({
    email:'',
    username:'',
    password:'',
    dob:'',
    age:''
  });
  const handleChange = (event) => {
    setuserRegistrationdetails({ ...userRegistrationdetails, [event.target.id]: event.target.value }); 
    // {username:'',password:'',username:'n'} //-->> { username: 'n',password:'' }
  };
const handleSubmit=(event)=>{
  event.preventDefault();
  console.log("Form submitted with data:", userRegistrationdetails);


}
const handleReset=()=>{
  setuserRegistrationdetails({
    email:'',
    password:'',
    dob:'',
    age:''
  });

};

  return (
  <div classname="main-register"><center>      
    <h1 className="head-part">Registration page</h1>
      <form onSubmit={handleSubmit}>
          <div className='email'>
            <label className="email-label"htmlFor='email'>Email:  </label>
              <input classsName="email-label"className="email-field"
              id='email'
              type="text"  
              value={userRegistrationdetails.email}
              onChange={handleChange}
            />          
            </div><br/>
            <div className='username'>
            <label className="username-label"htmlFor='username'>Username:  </label>
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
              <button className="btn-submit" type="submit" >Register</button><div className="button-space"/>
              <button className="btn-cancel"type="submit" onClick={handleReset}>Cancel</button>           
            </div>
          </form></center>
          </div>

  
     );
};
