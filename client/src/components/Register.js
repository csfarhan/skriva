import React from 'react'
import 'react-datepicker/dist/react-datepicker'
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector , useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {register, reset} from '../features/auth/authSlice';
import Spinner from '../components/Spinner';


function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
  })

  const {firstName, lastName, username, location, email, password, password2} = formData;
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
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // Changing values of all text fields
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  // Submitting form
  const onSubmit = e => {
    e.preventDefault();
    if(password !== password2){
      toast.error('Passwords do not match')
    } else {
      const userData = {
        firstName,
        lastName,
        username,
        location,
        email,
        password
      }
      dispatch(register(userData))
    }

    
  }

  if(isLoading){
    return <Spinner/>
  }

  return (
    <div>
      <form onSubmit={e => onSubmit(e)}>
        <div>
          <label>First Name:</label>
          <input type='text' value={firstName} name='firstName' onChange={e => onChange(e)}/>
        </div>
        <div>
          <label>Last Name:</label>
          <input type='text' value={lastName} name='lastName' onChange={e => onChange(e)}/>
        </div>
        <div>
          <label>Username:</label>
          <input type='text' value={username} name='username' onChange={e => onChange(e)}/>
        </div>
        <div>
          <label>Location:</label>
          <input type='text' value={location} name='location' onChange={e => onChange(e)}/>
        </div>
        <div>
          <label>Email:</label>
          <input type='text' value={email} name='email' onChange={e => onChange(e)}/>
        </div>
        <div>
          <label>Password:</label>
          <input type='text' value={password} name='password' onChange={e => onChange(e)}/>
        </div>
        <div>
          <label>Password2:</label>
          <input type='text' value={password2} name='password2' onChange={e => onChange(e)}/>
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
export default Register;