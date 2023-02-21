import React, { Component } from 'react'

class Form extends Component {
constructor(props) {
  super(props)

  this.state = {
     username:'',
     address:''
  }
}
handleUser=(event)=>{
  this.setState({
    username:event.target.value
  })
}
handleSub=(event)=>{
  alert(`${this.state.username}`)
  event.preventDefault();
}


  render() {
    return (
      <><form onSubmit={this.handleSub}>
        <input type="text" value={this.state.username} onChange={this.handleUser}/>
        <button type='submit'>submit</button>
        </form></>
    )
  }
}

export default Form