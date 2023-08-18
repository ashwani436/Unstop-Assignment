import React, { Component } from 'react'

export default class ComponentHasError extends Component {
  constructor(props) {
        super(props)
        this.state = {
            Counter:1
        }
    }
    render() {
        if (this.state.Counter === 5) {
            throw ("Error");
      }

    return (
        <div>
         {this.state.Counter}
        <button onClick={()=>this.setState({Counter:this.state.Counter+1})}>Increment</button>
        </div>
    )
  }
}
