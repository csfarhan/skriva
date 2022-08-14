import React, { Component } from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import Spinner from '../components/Spinner';
import {login, reset} from '../features/auth/authSlice';

function Login() {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    })

    const {email, password} = formData;
  
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    )

    useEffect(() => {
      if (isError) {
        toast.error(message)
      }
  
      if (isSuccess || user) {
        navigate('/')
      }
  
      dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = (e) => {
      e.preventDefault()
  
      const userData = {
        email,
        password,
      }
  
      dispatch(login(userData))
    }

    if (isLoading) {
      return <Spinner />
    }
    
    return (
      <div>
        <form onSubmit={e => onSubmit(e)}>
          <div>
            <label>Email:</label>
            <input type='text' value={email} name='email' onChange={e => onChange(e)}/>
          </div>
          <div>
            <label>Password:</label>
            <input type='text' value={password} name='password' onChange={e => onChange(e)}/>
          </div>
          <button type='submit'>Login</button>
        </form>
        <div>
          <p>Don't have an account? <Link to='/register'>Sign Up</Link> </p>
        </div>
      </div>
    )
  }
export default Login;