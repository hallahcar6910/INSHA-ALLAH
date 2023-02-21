import React,{useState, useEffect} from 'react'

export const Countdown = () => {
const[count,setCount]=useState(0) 

const tick=()=>{ 
    setCount(prevCount=>prevCount+1)
}
useEffect(()=>{
const interval=setInterval(tick,1000)
return()=>{
    clearInterval(interval)
}
},[])
  
return (

    <div>Countdown
        <h1>{count}</h1>
    </div>
  )
}
