import React from 'react'
import 'react-datepicker/dist/react-datepicker'
import {useState, useEffect} from 'react';


function Register() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

/*
  async function registerUser(){
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    const data = await response.json();

    console.log(data);
  }
*/
  return (
    <div>
      <form /*onSubmit={registerUser}*/>
        <div>
          <label>First Name:</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label>Last Name:</label>
          <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div>
          <label>Email:</label>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label>Password:</label>
          <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
export default Register;