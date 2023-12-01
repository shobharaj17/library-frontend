import React, { useState } from 'react';
import './Login.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Signup() {
    const [fname, setName1] = useState("");
    const [lname, setName2] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  

  const handlePost = () => {
    axios.post('http://localhost:5000/register', {fname,lname, name, email, })
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully");
          setEmail("");
          setName1("");
          setName2("");
          setName("");
         
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        alert("Something went wrong when saving data.");
      });
  }

 
  return (<>
    <div className="container4">
      <h1>Sign Up</h1>
      <form>
      <label>First Name:</label>
        <input
          type="text" 
          className="input-field" 
          placeholder=""
          value={fname} required
          onChange={(e) => setName1(e.target.value)}
        />
        <br></br>
        <label>Last Name:</label>
        <input
          type="text"
          className="input-field" 
          placeholder=""
          value={lname} required
          onChange={(e) => setName2(e.target.value)}
        />
        <br></br>
        </form>
        <form>
      <label>Enter Email:&nbsp;&nbsp;</label>
        <input
          type="email"
          className="input-field" 
          placeholder=""
          value={name} required
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label>Enter password:&nbsp;&nbsp;</label>
        <input
          type="text"
          className="input-field"
          placeholder="Enter ur password"
          value={email} required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
  </form>
  <button  className ='button' type="button" onClick={handlePost}>SignUp</button> 
    </div><br/><br/><br/></>
  );
}

export default Signup;