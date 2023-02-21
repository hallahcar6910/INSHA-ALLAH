import React, { Component } from 'react';
import Parentprops from './Parentprops';

class Practisetwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:
         [{name:"ada"},
            {name:"adad"},
            {name:"adada"}


         ]
      }
    }
  render() {
    return (
      <div>
<Parentprops data={this.state.data}/>
      </div>
    )
  }
}

export default Practisetwo