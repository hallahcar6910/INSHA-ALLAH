import React,{useState} from 'react'

export const FormTest = () => {
    const[submitted, setSubmitted]=useState(false);
    const[valid,setValid]=useState(false)
    const[info, setInfo]=useState({
email:"",
password:"",
confirm:"",
isChecked:true

    })
    const handleChange=(event)=>{
        const{name, value,type,checked}=event.target
        setInfo(prevState=>{
            return{...prevState,
                 [name]:type==='checkbox'? checked :value}
        })
       


    }

   const handleSubmit=(event)=>{
    event.preventDefault()
    if(info.password ===info.confirm){
        
        alert('success')
    }
    else{
        alert('password error')
        return
    }
   }
  return (
    <div>FormTest
<form onSubmit={handleSubmit}>
    {/* {submitted && valid? 'sucesss':null} */}
    {/* <p>{`${info.password} && ${info.confirm}`? "successful":"pasword not matched" }</p> */}
   
<input type="text"  name='email' value={info.email} onChange={handleChange} placeholder="email"/>
<input type="password"  name='password' value={info.password} onChange={handleChange} placeholder="password"/>
<input type="password"  name='confirm' value={info.confirm} onChange={handleChange} placeholder="confirm password"/>
<input type="checkbox"  id='isChecked' name='isChecked' checked={info.isChecked} onChange={handleChange}/>
<label htmlFor="isChecked"></label>
<button>Sign up</button>



</form>



    </div>
  )
}
