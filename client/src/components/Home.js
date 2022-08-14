import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {logout, reset} from '../features/auth/authSlice';

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
    </div>
  )
}

export default Home
