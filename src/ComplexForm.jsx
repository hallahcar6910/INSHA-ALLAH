import React,{useState} from 'react'

export const ComplexForm = () => {
    const[info, setInfo]=useState({
        firstname:'',
        lastname:'',
        email:'',
        comments:'',
        isFriendly:'true',
        employment:''
    })


    const handleChange=(event)=>{
        const{name,value,type,checked}=event.target
        setInfo(prevState=> {
           return {...prevState,
            [name]: type==="checkbox"? checked :value}})
    }
    // const handleChange=(event)=>{
    //     setInfo(prevState=> {
    //        return {...prevState,[event.target.name]: event.target.value}})
    // }
const handleSubmit=(event)=>{
event.prevDefault();
}
  return (
    <div>ComplexForm
<form onSubmit={handleSubmit}>
Firstname<input type="text" value={info.firstname} name='firstname'onChange={handleChange} /><br/>
Lastname<input type="text" value={info.lastname} name='lastname'onChange={handleChange} /><br/>
Email<input type="text" value={info.email} name='email'onChange={handleChange} /> <br/>
<textarea name="comments" cols="30" rows="10" value={info.comments} onChange={handleChange}></textarea><br/>

<input  name='isFriendly'type="checkbox"id='isFriendly'checked={info.isFriendly} onChange={handleChange} />
<label htmlFor="isFriendly">Are you friendly?</label>
<p>RADIO BUTTON</p>
<input type="radio"  id='unemployed' name='employment' checked={info.employment==='unemployed'}value='unemployed'onChange={handleChange} />
<label htmlFor="unemployed"> unemployed</label>
<input type="radio"  id='part-time'name='employment' checked={info.employment==='part-time'} value='part-time'onChange={handleChange} />
<label htmlFor="part-time"> part-time</label>
        <input type="radio"  id='full-time'name='employment' checked={info.employment==='full-time'} value='full-time'onChange={handleChange} />
<label htmlFor="full-time"> full-time</label>
<select name="" id="favColor"></select>
<option value="red">Red</option>
<option value="yellow">Yellow</option>
<option value="green">Green</option>
<option value="red">Red</option>
<button type='submit'>submit</button>



</form>


    </div>
  )
}
