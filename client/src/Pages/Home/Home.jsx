import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import Spinner from '../../components/Spinner/Spinner';
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
      navigate('/dashboard')
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

          <div className = "input-cont">
            <input type = "email" value = {email} name = "email" className='email-input' placeholder='  ' onChange={e => onChange(e)}/>
            <label className = "email-lbl" htmlFor='email-input'>Email</label>

            <input type = "password" value = {password} name='password' className='password-input' placeholder='  ' onChange={e => onChange(e)}/>
            <label className = "password-lbl" htmlFor='password-input'>Password</label>
          </div>

          
          

          <div className='forgot-password'>
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
