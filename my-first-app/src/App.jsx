// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home.jsx';
import Login from './Components/Login';
import Register from './Components/Register';
import UseState from './Components/27-10-Hooks/UseState';
import UseEffect from './Components/31-10-UseEffectHook/UseEffect';
import UseEffectTypeTwo from './Components/31-10-UseEffectHook/UseEffectTypeTwo';
import UseEffectTypeThree from './Components/31-10-UseEffectHook/UseEffectTypeThree';

function App() {
    return(

        <div className='App'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/use-state' element={<UseState />}/>
                <Route path='/use-effect' element={<UseEffect/>}/>
                <Route path='/use-effect2' element={<UseEffectTypeTwo />}/>
                <Route path='/use-effect3' element={<UseEffectTypeThree/>}/>
            </Routes>

        </div>

    );
}

export default App;
