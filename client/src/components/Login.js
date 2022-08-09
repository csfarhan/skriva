import React, { Component } from 'react'
import {useState, useEffect} from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    return (
      <div>
        <form>
          <div>
            <label>Email:</label>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label>Password:</label>
            <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
export default Login