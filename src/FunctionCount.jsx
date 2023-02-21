import React,{useState} from 'react';
import './file.style.css';



export default function FunctionCount() {
const[count, setCount]=useState(10);
const[colr,setColr]=useState('sub');
const increment=()=>{
    const m=count +1;
    if (m>30){
        return
    }
    if(m>=20){
        setColr('add');
    }
    setCount(m);
}
const decrement=()=>{
    
   const j=count -1;
   if (j===0){
    return
}
   if(j<20){
    setColr('sub')
   }
    setCount(j);
}



  return (
    <div>FunctionCount
        <p className={colr}>{count}</p>
        <button onClick={increment}>count+ </button>
        <button onClick={decrement}>count-</button>
    </div>
  )
}
