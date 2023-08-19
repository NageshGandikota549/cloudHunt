import React, { useState } from 'react';
import './Login.css'
export function Login() {

  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
    age: '',
    dob:''
  });

  const [enableForm, setEnableForm] = useState(true);

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const handleChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.id]: event.target.value }); // {username:'',password:'',username:'n'} //-->> { username: 'n',password:'' }
  };

  // const handlePasswordChange = (event) => {
  //   setUserDetails({...userDetails, password:event.target.value});
  // };

  const handleSubmit = (event) => {
    // event.preventDefault();

    // console.log('Username:', username);
    // console.log('Password:', password);

    // // Reset form fields to empty after submission
    // setUsername('');
    // setPassword('');
  };


  const handleDisableButton = () => {
    setEnableForm(!enableForm);
  }

  return (
    <div>
      <center>      
        <h2>Login</h2>
        <div>
          <button onClick={handleDisableButton}>{enableForm ? 'Disable' : 'Enable'}</button>
          {/* condition?true:false */}
        </div>

        
      <form onSubmit={handleSubmit}>
        <div className='username'>
          <label htmlFor='username'>Username:  </label>
            <input
            id='username'
            type="text"  
            disabled={!enableForm}  
            value={userDetails.username}
            onChange={handleChange}
          />          
          </div>

          <br/>
          
        <div className='password'>
          <label htmlFor='password'>Password:   </label>
            <input
            id='password'
              type="password"
            disabled={!enableForm}  
              
            value={userDetails.password}
            onChange={handleChange}
            />
          </div>
          
          <br/>
          <div className='btn-section'>            
            <button disabled={!enableForm}   classname='btn cancel' type="submit">Cancel</button>
            <button disabled={!enableForm}   className='btn' type="submit" >Login</button>           
          </div>
        </form>
        
        {userDetails.username}--{userDetails.password}
      </center>
    </div>
  );
}

