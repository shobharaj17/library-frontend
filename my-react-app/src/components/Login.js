import React, { useEffect,useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [users, setUsers] = useState([]);
  const [password, setPassword] = useState("");
  const [username,  setUsername] = useState("");
  const [userNames, setUserNames] = useState([]);

  const  handleLogin = () => {
    axios.get('http://localhost:5000/')
      .then((response) => {
        const users = response.data;
        const names = users.map((user) => user.name);
        setUserNames(names);
      })
      .catch((error) => {
        console.error("GET request error:", error);
      });
      
  }

  return (
    <>
    <div className="container2">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label>Username:</label>
          <input  className="input-field" type="email" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password"  className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button className='button' onClick={handleLogin}>Login</button> <br>
        </br>
      
        <Link to='/Sign'><button className='button' >SignUp</button></Link> 
        <p>Create a new account by clicking Singup  button</p>
      </form>
     
    </div></>
  );
}

export default Login;