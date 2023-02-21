import React, { useState,useEffect} from 'react'

export const Countimer = () => {
    const[read, setRead]=useState(0)
    const tick=()=>{
setRead(prev=>prev +1)

    }
    useEffect(()=>{
const interval=setInterval(tick,1000)
return()=>{
    clearInterval(interval)
}


    },[])
  return (
    <div>Countimer
        <h1>{read}</h1>
    </div>
  )
}
