import React, { Component }  from "react";
import CounterButton from './CounterButton';
//! performance demo 1/2
class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Header never changes.
    return false;
  }
  
  render() {
    console.log({ comp: 'HEADER', time: new Date() });
    return (
      <>
        <h1 className="main-heading tc">Home Searcher</h1>
        <CounterButton color={'red'} />
      </>
    )
  }
}

export default Header;
