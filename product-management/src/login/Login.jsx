import React, { useState } from 'react';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);

    // Reset form fields to empty after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div><center>      
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='username'>
          <label>Username:  </label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          /><br></br>
        </div>
        <div className='password'>
          <label>Password:   </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          /><br></br>
        </div>
        <div classname='btn btn-primary'><button type="submit">Login</button></div>
        <div classname='cancel'><button type="submit">Cancel</button></div>
      </form>
      </center>

    </div>
  );
}

