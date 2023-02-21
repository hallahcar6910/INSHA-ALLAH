import React,{useState} from 'react'

export const AddItem = () => {
const[item,setItem]=useState([ 'things 1', 'things 2'])
const handleClick=()=>{
    setItem(prevState=>  [...prevState, `things ${prevState.length+1}`])


}

  return (
    <div>AddItem
        <button onClick={handleClick}>add </button>
        <p>{item}</p>
    </div>
  )
}
