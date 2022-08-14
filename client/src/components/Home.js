import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {logout, reset} from '../features/auth/authSlice';
import {Link} from 'react-router-dom'

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
      <h1>Homepage</h1>
      <p>
        {user ? (<button onClick={onLogout}>Logout</button>) : (
          <div></div>
        )}
        
      </p>
      <p>Don't have an account? <Link to='/register'>Sign Up</Link> </p>
      <p>Have an account? <Link to='/login'>Log in</Link> </p>
    </div>
  )
}

export default Home
