import React, { Component } from "react";
//! //! performance demo 2/2
class CounterButten extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    return (this.state.count !== nextState.count);
  }
  updateCount = () => {
    this.setState(state => {
      return { count: state.count + 1 }
    });
  }
  render() {
    console.log('COUNTER BUTTON');
    return (
      <button style={{display:"block", margin:"0 auto"}}colour={ this.props.colour } onClick={ this.updateCount }> 
        COUNT: {this.state.count}
      </button>
    );
  }
}

export default CounterButten;