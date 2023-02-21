import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"hello"
      }
    }
    handleChange=()=>{
        this.setState({username:"hello abass"});}
    
  render() {
    return (
      <div><h1>{this.state.username}</h1>
        <button type='button' onClick={this.handleChange}>change</button>
      </div>
    )
  }
}

export default Button