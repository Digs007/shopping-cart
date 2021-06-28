import React, { Component } from "react";
class Counter extends Component {
  state = { count: 0 };

  render() {
    return (
      <div>
        <span className={this.getBadgesclass()}>{this.fomatCounter()}</span>
      </div>
    );
  }
  getBadgesclass = () => {
    let classes = "badge m-2 badge-";
    classes += this.count === 0 ? "warning" : "primary";
    return classes;
  };
  fomatCounter = () => {
    const { count } = this.state;
    return this.count === 0 ? "Zero" : count;
  };
}

export default Counter;
