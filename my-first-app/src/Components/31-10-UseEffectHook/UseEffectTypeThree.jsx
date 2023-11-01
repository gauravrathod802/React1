import { useEffect, useState } from "react";


function UseEffectThree(){
    const[counter,setCounter]=useState(0);
    const[counter2,setCounter2]=useState(2);
    function increment(){
        setCounter((preValue)=> preValue+1);
    }
    function incrementCounter2(){
        setCounter2((preValue)=>preValue+2);
    }
    useEffect(()=>{
        //It will execute the code on first time of render and whenever state changes whichever state is passed in. in below code i have passed counter and it will change its state whenever counter is changed.
        console.log("UseEffect Type three");
    },[counter])
    // useEffect(()=>{
    //     console.log("UseEffect Type three");
    // },[counter2])

return(
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick={increment}>+</button>
        <h2>Counter2:{counter2}</h2>
        <button onClick={incrementCounter2}>+</button>
    </div>
)

}
export default UseEffectThree;