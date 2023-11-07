// import logo from './logo.svg';
// import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home.jsx';
import Login from './Components/Login';
// import Register from './Components/Register';
import UseState from './Components/27-10-Hooks/UseState';
import UseEffect from './Components/31-10-UseEffectHook/UseEffect';
import UseEffectTypeTwo from './Components/31-10-UseEffectHook/UseEffectTypeTwo';
import UseEffectTypeThree from './Components/31-10-UseEffectHook/UseEffectTypeThree';
import UseEffectFour from './Components/1-11-UseEffectType4/UseEffectFour';
import PropDrilling from './Components/2-11-Prop-Drilling/PropDrilling';
import { useState } from 'react';
import PropDrillingTwo from './Components/2-11-Prop-Drilling/PropDrillingTwo';
import Mapping from './Components/2-11-Prop-Drilling/Mapping';
import MappingTwo from './Components/2-11-Prop-Drilling/MappingTwo';
import Register from './Components/6-11-Form/Register';
import Form from './Components/7-11-form/Form';

function App() {
    const[student, setData]=useState(["vikas","vinod","vishnu"])

    // prop-drillingTwo fun passing
    const [counter, setCounter] = useState(10);
    function IncrementCounter() {
        setCounter((prevValue) => prevValue + 1)
    }


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
                <Route path='/use-effect4' element={<UseEffectFour/>}/>
                <Route path='/prop-drilling' element={<PropDrilling data={student} myName="Gaurav"/>}/>
                <Route path='/prop-drilling2' element={<PropDrillingTwo counter={counter} IncrementCounter={IncrementCounter}/>}/>
                <Route path='/mapping' element={<Mapping/>}/>
                <Route path='/mapping2' element={<MappingTwo/>}/>

                <Route path='/register' element={<Register/>}/>
                <Route path='/form' element={<Form/>}/>

            </Routes>

        </div>

    );
}

export default App;
