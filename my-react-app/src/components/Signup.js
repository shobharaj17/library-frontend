import React, { useState } from 'react';
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Add your sign-up logic here
  };

  return (
    <>
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="input-group">
          <label>Username:</label>
          <input className='input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input className='input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input className='input'  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='button' onClick={handleSignUp}>Sign Up</button>
      </form>
    
    </div>  <br/> <br/>  <br/> 
    </>
  );
}

export default Signup;