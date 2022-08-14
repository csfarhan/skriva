import './App.css';
import React, {useState} from 'react';
import Register from './components/Register';
import Login from'./components/Login';
import Home from'./components/Home';
import {Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </div>

  );
};
  
export default App;