import React, { Component } from 'react'

class Letter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         audit:''
      }
    }
    handlechange=(event)=>{
        this.setState({
            audit:event.target.value
        })
    }
  render() {
    return (
      <div>Letter
        <input type="text"  value={this.state.audit} onChange={this.handlechange}/>
        <p>{this.state.audit.toLocaleUpperCase()}</p>
      </div>
    )
  }
}

export default Letter