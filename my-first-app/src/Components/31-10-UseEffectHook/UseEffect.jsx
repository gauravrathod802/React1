import { useEffect, useState } from "react";

function UseEffect(){
    const[count, counter]=useState(0);
    // console.log(count);

    function increment(){
        counter((preValue)=>preValue+1);
    }

    // we are using anonymous arrow inside UseEffect hook 
    useEffect(()=>{
        console.log("UseEffect type1");
    })

    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={increment}>+</button>
        </div>
    )
}
export default UseEffect;