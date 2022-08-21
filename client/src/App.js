import './App.css';
import React from 'react';
import Register from './components/Register';
import Login from'./components/Login';
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>

  );
};
  
export default App;