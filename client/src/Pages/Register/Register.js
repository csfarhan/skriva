import React from 'react'
import 'react-datepicker/dist/react-datepicker'
import {useState, useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {register, reset} from '../../features/auth/authSlice';
import Spinner from '../../components/Spinner/Spinner';
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
      <div className="container">
        <div className='left'>
          <h1 className='title'>Skriva</h1>
          <form onSubmit={e => onSubmit(e)}>
            <input placeholder='  ' className='firstName' type='text' value={firstName} name='firstName' onChange={e => onChange(e)}></input>
            <label className='firstName-lbl' htmlFor='firstName'>Firstname</label>

            <input placeholder='  ' className='lastName' type='text' value={lastName} name='lastName' onChange={e => onChange(e)}></input>
            <label className='lastName-lbl' htmlFor='lastName'>Lastname</label>

            <input placeholder='  'className='userName' type='text' value={username} name='userName' onChange={e => onChange(e)}></input>
            <label className='username-lbl' htmlFor='userName'>Username</label>


            <input placeholder='  ' className='email-reg' type='text' value={email} name='email' onChange={e => onChange(e)}></input>
            <label className='emailreg-lbl' htmlFor='email'>Email</label>


            <input placeholder='  'className='password1' type='text' value={password} name='password' onChange={e => onChange(e)}></input>
            <label className='password1-lbl' htmlFor='password1'>Password</label>


            <input placeholder='  ' className='password2' type='text' value={password2} name='password2' onChange={e => onChange(e)}></input>
            <label className='password2-lbl' htmlFor='password2'>Retype Password</label>
            
            <input className='date-ofbirth' type="date" name="dateofbirth" id="dateofbirth"></input>
            <div className='register-cont'><button className='register' type='submit'>Register</button></div>
          </form>
        </div>
        <div className="border">
        </div>
        <div className='right'>
          <h1>Sign Up</h1>
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
  )
}
export default Register;