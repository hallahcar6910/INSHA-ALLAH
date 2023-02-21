import React, { Component } from 'react'

 class Question extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         question:"what is the capital of Lagos"
      }
    }
    handleChange=()=>{
        this.setState({
            question:"ikeja"
        })
    }

  render() {
    return (
      <div> <p>Question</p>
      <p>{this.state.question}</p>
        <button onClick={this.handleChange}>answer</button>
      </div>
    )
  }
}

export default Question