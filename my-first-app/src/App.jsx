// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home.jsx';
import Login from './Components/Login';
import Register from './Components/Register';
import UseState from './Components/27-10-Hooks/UseState';

function App() {
    return(

        <div className='App'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/use-state' element={<UseState />}/>
            </Routes>

        </div>

    );
}

export default App;
