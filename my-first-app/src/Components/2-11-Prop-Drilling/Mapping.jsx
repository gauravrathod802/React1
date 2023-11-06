import { useState } from "react";

function Mapping(){
    const[student,studentData]=useState(["Akshay","Sandesh","Sahil"])
    return(
        <div>
            {student.map((i)=>(
                <div>
                    <h1>{i}</h1>
                </div>
            ))}
             {/* {student.map((i)=>(
                <div>
                    <h2>{i}</h2>
                </div>
            ))} */}

        </div>
    )
}
export default Mapping;