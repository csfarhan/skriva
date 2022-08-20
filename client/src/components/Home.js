import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {logout, reset} from '../features/auth/authSlice';
import {Link} from 'react-router-dom'
import './styling/home.css';
import landing from './images/landing.png';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);

  const onLogout = () =>{
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  }
  return (
    <div>
      <div className='container'>
        <div className="innerContainer">
          <div className='mainBox'>
            <h1 className='signIn'>Sign in</h1>
            <div className='textFields'>
              <input className='textBox' type='text' placeholder='Email'></input>
            </div>
            <div className='textFields'>
              <input className='textBox' type='text' placeholder='Password'></input>
            </div>
            <div className='center'>
              <h6>Forgot Password?</h6>
            </div>
            <div className='button'>
              <button type='submit'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    /*
    <div>
      <h1>Homepage</h1>
      <p>
        {user ? (<button onClick={onLogout}>Logout</button>) : (
          <div></div>
        )}
        
      </p>
      <p>Don't have an account? <Link to='/register'>Sign Up</Link> </p>
      <p>Have an account? <Link to='/login'>Log in</Link> </p>
    </div>
    */
  )
}

export default Home
