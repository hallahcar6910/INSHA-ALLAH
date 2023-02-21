import React,{useState,useEffect} from 'react'

function UseCount() {
    const[count, setCount]=useState(0);
    const[name, setName]=useState("")
    useEffect(()=>{
        document.title=`you clicked ${count} times`
    })
 const handleClick=()=>{
    setCount(count+1)
 }
 const handleName=(event)=>{
setName(event.target.value)

 }
  return (
    <div><p></p>
    <input type="text" value={name}  onChange={handleName}/>
        <button onClick={handleClick}>click {count}</button></div>
  )
}

export default UseCount