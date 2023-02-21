import React,{useState,useEffect} from 'react';
import axios from 'axios'

export const Datafetching = () => {
    const[posts, setPosts]=useState([]);
    const [id,setId]=useState(1);
    const[frmb, setFrmb]=useState(1);
    useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/posts/${frmb}`)
.then(res=>{
    setPosts(res.data)
})

    },[frmb])
   const  handleClick=()=>{
        setFrmb(id)
    }

  return (
    <div> <h1>Datafetching</h1>
    <input type="text"  value={id} onChange={(event)=>{
        setId(event.target.value)
    }}/>
    <button onClick={handleClick}>Check it Out</button>
    <p>{posts.title}</p>
{/* <ul>{posts.map(post => 
    <li key={post.id}>{post.title}</li>
)}</ul> */}


    </div>

  )
}
