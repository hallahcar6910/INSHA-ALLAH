import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    handleChange=()=>{
        this.setState({
            count:this.state.count +1
        })
    }
  render() {
    return (

      <div>Counter
        <p>{this.state.count}</p>
        <button onClick={this.handleChange}>Increment</button>
      </div>
    )
  }
}

export default Counter