import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import Spinner from '../Spinner/Spinner';
import {login, reset} from '../../features/auth/authSlice';
import './home.css';


const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData;

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset()) //Maybe fix the reset to be somethihng else, as its a confusing workflow.
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

  return (
    <>
      <div className='home-body'>

        <div className='skriva'>
          SKRIVA
        </div>

        <div className='motto'>
          Write, don't fight.
        </div>

        <form className='signin-container' onSubmit={e => onSubmit(e)}>

          <div className='signin-text'>
            Sign in
          </div>
          <input value = {email} name='email'  className='email-input' onChange={e => onChange(e)}>
          </input>

          <input value = {password} name='password' className='password-input' onChange={e => onChange(e)}>
          </input>
          

          <div  className='forgot-password'>
            Forgot password?
          </div>
          
          <button type='submit' className='loginbtn'>Login</button>

          <div className='line'>
          </div>

          <div className='signup-text'>
            Don't have an account?
            <div className='create-one-text'>
            Create one!
            </div>
          </div>

        </form>
      </div>
    </>
  )
}

export default Home
