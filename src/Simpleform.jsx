import React,{useState} from 'react';
import './file.style.css'

function Simpleform() {
    const[submitted, setSubmitted]=useState(false);
    const[valid, setValid]=useState(false);
    const[values, setValues]=useState({
        firstname:"",
        lastname:"",
        email:""
    })
    const handleFirst=(event)=>{
setValues({...values, firstname: event.target.value})

    }
    const handleLast=(event)=>{
setValues({...values, lastname:event.target.value})

    }
    const handleEmail=(event)=>{
        setValues({...values, email:event.target.value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if( values.firstname && values.lastname && values.email){
            setValid(true);
        }
        setSubmitted(true);
        
    }
  return (
    <div>Simpleform
<form onSubmit={handleSubmit}>
    {submitted && valid?<div className='success'>Sucessful</div>:null}

    <label>Firstname</label>
    <div><input type="text"  value={values.firstname} onChange={handleFirst}/>
   <br />{submitted && !values.firstname?<span>input firstname</span>:null}</div>
    <label>Lastname</label>
   <div><input type="text"  value={values.lastname} onChange={handleLast}/>
   <br />{submitted && !values.lastname?<span>input lastname</span>:null}</div>
   <label>Email</label><div><input type="text"  value={values.email} onChange={handleEmail}/>
   <br />{submitted && !values.email?<span>input email</span>:null}</div>
   
   <button type='submit'>Register</button>
   
</form>


    </div>
  )
}

export default Simpleform