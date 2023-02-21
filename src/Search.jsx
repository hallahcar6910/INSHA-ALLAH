import React,{useState} from 'react';


function Search() {
    const itemList=["bab",
"besty","boll"];
const[contain, setContain]=useState(itemList);
const fish=(event)=>{
const query=event.target.value;
var uplist=[...itemList];
uplist=uplist.filter((item)=>{
    return item.toLowerCase().indexOf(query.toLowerCase())!==-1;
    setContain(uplist);
})
}

  return (
    <div><input type="text"  placeholder='....' onChange={fish}/>
    <ol>{contain.map((item,index) => (<li key={index}>{item}</li>))}</ol>

    </div>
  )
}

export default Search