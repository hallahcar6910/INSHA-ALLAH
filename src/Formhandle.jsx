import React from 'react'

function Formhandle(props) {
  return (
    <div><form onSubmit={this.handleSub}>
    <input type="text" value={props.user} onChange={props.chane}/>
    <button type='submit'>submit</button>
    </form></div>
  )
}

export default Formhandle