import React from 'react'
import 'react-datepicker/dist/react-datepicker'
import {useState, useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {register, reset} from '../../features/auth/authSlice';
import Spinner from '../../components/Spinner/Spinner';
import {Link} from 'react-router-dom';
import './register.css';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  // Simplify information from formData
  const {firstName, lastName, username, email, password, password2} = formData;

  // Navigate, redirects users to a different location
  const navigate = useNavigate()
  // Dispatch calls the functions made by redux
  const dispatch = useDispatch()

  // useSelector returns the state of the respective reducer in this case auth
  // It returns the states in our case because there are multiple state functionalities
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  // useEffect implements the following code
  // if a change is made in the conditional array.
  // In this case if any of those conditions are changed
  // an error message is sent if error or success navigates the user
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
  // prevent default makes sure the refreshing 
  // of page does not reset information in text fields
  const onSubmit = e => {
    e.preventDefault();
    
    // If passwords don't match then error
    if(password !== password2){
      toast.error('Passwords do not match')
    } 
    // If passwords match then userData object is created
    // and sent to the register function which makes
    // a post call with axios
    else {
      const userData = {
        firstName,
        lastName,
        username,
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
    <div className='outer'>
      <div className="container grid">
        <div className='left'>
          <h1>Sign Up</h1>
          <form onSubmit={e => onSubmit(e)}>
            <input className='firstName' type='text' value={firstName} name='firstName' onChange={e => onChange(e)}></input>
            <input className='lastName' type='text' value={lastName} name='lastName' onChange={e => onChange(e)}></input>
            <input className='userName' type='text' value={username} name='username' onChange={e => onChange(e)}></input>
            <input className='email' type='text' value={email} name='email' onChange={e => onChange(e)}></input>
            <input className='password1' type='text' value={password} name='password' onChange={e => onChange(e)}></input>
            <input className='password2' type='text' value={password2} name='password2' onChange={e => onChange(e)}></input>
            <input className='date-ofbirth' type="date" name="dateofbirth" id="dateofbirth"></input>
            <button type='submit'>Register</button>
          </form>
        </div>
        <div className="border">
        </div>
        <div className='right'>
          <h1>Skriva</h1>
          <ul className='list'>
            <li className='item1'>
              Write what you desire
            </li>
            <li className='item2'>
              Show the world what you write
            </li>
            <li className='item3'>
              See what the world is writing
            </li>
            <li className='item4'>
              Save whatever you like
            </li>
            <li className='item5'>
              Share whatever you like
            </li>
          </ul>
        </div>
      </div>
    </div>
    /*
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
      <p><Link to='/'>Homepage</Link> </p>
    </div>*/
  )
}
export default Register;