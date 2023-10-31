import { useState } from "react";

// this is vanilla js ex or traditional js
var number=12;
console.log(number);  //12

number=10;  //10
number++;   //11
console.log(number);  //11

//this is react using useState hook

const [value,fun]=useState[10];
console.log(value) //10
console.log(fun);   //fun here is a function which is used to update the value 
fun(20);
console.log(value);  //20