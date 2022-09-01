import './App.css';
import React from 'react';
import Register from './components/Register/Register';
import Home from './components/Home/Home'
import {Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path= '/' element = {<Home/>}/>
      </Routes>
    </div>

  );
};
  
export default App;