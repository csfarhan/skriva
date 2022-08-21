import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../features/auth/authSlice';
import './styling/home.css';


const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
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

        <div className='signin-container'>

          <div className='signin-text'>
            Sign in
          </div>
          <input className='email-input'>
          </input>

          <input className='password-input'>
          </input>
          

          <div className='forgot-password'>
            Forgot password?
          </div>

          <div className='loginbtn'>

            <div className='login-text'>
              login
            </div>

          </div>

          <div className='line'>
          </div>

          <div className='signup-text'>
            Don't have an account?
            <div className='create-one-text'>
            Create one!
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
