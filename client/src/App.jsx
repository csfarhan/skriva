import './App.css';
import React from 'react';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home'
import Dashboard from './Pages/Dashboard/Dashboard'
import Profile from './Pages/Profile/Profile';
import {Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path= '/' element = {<Home/>}/>
        <Route path = '/dashboard' element = {<Dashboard/>}/>
        <Route path = '/profile' element = {<Profile/>}/>
      </Routes>
    </div>

  );
};
  
export default App;