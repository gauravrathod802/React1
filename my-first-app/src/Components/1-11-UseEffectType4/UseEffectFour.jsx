import { useEffect, useState } from "react";

function UseEffectTypeFour(){
    const[counter,setCounter]=useState(0);
    const[counter2,setCounter2]=useState(2);
    const[counter3,setCounter3]=useState(4);
    const[counter4,setCounter4]=useState(10);

    function increment(){
        setCounter((preValue)=>preValue+1);
    }
    function decrement(){
        setCounter2((preValue)=>preValue-1);
    }function increment2(){
        setCounter3((preValue)=>preValue+4);
    }function decrement2(){
        setCounter4((preValue)=>preValue-5);
    }

    useEffect(()=>{
        console.log("Use Effect type four")
    },[counter,counter2,counter3,counter4])
return(
    <div>
        <h1>Use Effect type 4</h1>
        <h1>Counter:{counter}</h1>
        <button onClick={increment}>+</button>
        <h1>Counter:{counter2}</h1>
        <button onClick={decrement}>-</button>
        <h1>Counter:{counter3}</h1>
        <button onClick={increment2}>+</button>
        <h1>Counter:{counter4}</h1>
        <button onClick={decrement2}>-</button>


    </div>
)
}
export default UseEffectTypeFour;