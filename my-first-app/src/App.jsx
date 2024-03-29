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
import Slider from './Components/Image slider/Slider.jsx';
import Ring from './Components/Ring Slider/Ring.jsx';
import Navbar from './Components/NavbarResponsive/Navbar.jsx';
import Sidebar from './Components/NavbarResponsive/Sidebar.jsx';
import Overview from './pages/Overview.jsx';
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from './pages/Reports.jsx';
import Team from './pages/Team.jsx';

import Header from './Components/Sidebar/Header.jsx';
import Navigation from './Components/Sidebar/Navigation.jsx';

function App() {
    const[student, setData]=useState(["vikas","vinod","vishnu"])

    // prop-drillingTwo fun passing
    const [counter, setCounter] = useState(10);
    function IncrementCounter() {
        setCounter((prevValue) => prevValue + 1)
    }


    return(

        <div className='App'>
            {/* <Sidebar /> */}
            {/* <Navbar/> */}
            <Navigation />
            <Routes>
                {/* <Route path='/' element={<Header/>}/> */}
                {/* <Navigation/> */}


                {/* <Route path='/' element={<Home/>}/>
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
                <Route path='/slider' element={<Slider/>}/>
                <Route path='/ring' element={<Ring/>}/> */}



        {/* <Route path='/overview' element={<Overview/>} />
        <Route path='/reports' element={<Reports/>} />
        <Route path='/reports/reports1' element={<ReportsOne/>} />
        <Route path='/reports/reports2' element={<ReportsTwo/>} />
        <Route path='/reports/reports3' element={<ReportsThree/>} />
        <Route path='/team' element={<Team/>} /> */}

            </Routes>

        </div>

    );
}

export default App;
