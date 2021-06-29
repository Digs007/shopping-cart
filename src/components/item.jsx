import React, { Component } from "react";
class Item extends Component {
  state = { value: this.props.value };
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.getBadgesClass()}>{this.formatCounter()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgesClass = () => {
    let classes = "badge m-2 badge-";
    classes += this.value === 0 ? "warning" : "primary";
    return classes;
  };
  formatCounter = () => {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  };
}

export default Item;
