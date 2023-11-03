import { useState } from "react";

function UseState(){
    const [count, setCounter]=useState(0)
    console.log(count, "-count")

    function Increment(){
        setCounter ((value)=>value+1)
    }
    function Decrement(){
        setCounter ((value)=>value-1);
    }

    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
        </div>
    )

}
export default UseState;