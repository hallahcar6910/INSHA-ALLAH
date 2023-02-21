import React, { Component } from 'react'

class MyForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         password:""
      }
    }
    handleUser=(event)=>{
      this.setState({
    username: event.target.value

      })
    }
    handlePass=(event)=>{
this.setState({
password:event.target.value

})

    }
    handleLog=(event)=>{
alert(`${this.state.username} ${this.state.password}`)
event.preventDefault();
    }
  render() {
    return (
      <form  onSubmit={this.handleLog}>
<div>My Details</div>
<div>
<label>Username1</label>
<input type="text" value= {this.state.username} onChange={this.handleUser}/></div>
<div>
<label>Password1</label>
<input type="password" value= {this.state.password} onChange={this.handlePass}/></div>
<button value="submit">Log In</button>



      </form>
    )
  }
}

export default MyForm