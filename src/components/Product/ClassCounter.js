import React, { Component } from "react";

class CCounter extends Component {
  state = {
    count: 0,
  };
  addOneHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <p>count= {this.state.count}</p>
        <button onClick={this.addOneHandler}>add One</button>
      </div>
    );
  }
}

export default CCounter;
