// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';

import Home from './Components/Home.jsx'
import Login from './Components/Login'
import Register from './Components/Register'

function App() {
    return(
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>

        </div>
    );
}

export default App;
