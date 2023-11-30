import React, { useState } from 'react';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
  };

  return (
    <>
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label>Username:</label>
          <input className='input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='button' onClick={handleLogin}>Login</button><br></br>
        < Link to='/signup'    ><button className='button' onClick={handleLogin}>Sign Up</button></Link>
        
      </form>
    </div>
    <br/> <br/> <br/>
    </> 
  );
}

export default Login;