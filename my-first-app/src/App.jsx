// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'

function App() {
    const[count,setCounter]=useState(0);

    function increment(){
        setCounter((preValue)=>preValue+1);
    }

    function decrement(){
        setCounter((preValue)=>preValue-1);
    }


    return(
        <div>
        <h1>Cart</h1>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
        </div>
    )
}

export default App;
