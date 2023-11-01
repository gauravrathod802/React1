import { useEffect, useState } from "react";

function UseEffectTwo(){
    const[count, counter]=useState(0);

    function increment(){
        counter((preValue)=>preValue+1);
    }

    useEffect(()=>{
        console.log("UseEffect type two")
    },[])
    return(
        <div>
            <h2>Use Effect type two</h2>
            <h1>Counter:{count}</h1>
            <button onClick={increment}>+</button>
        </div>
    )

}
export default UseEffectTwo;