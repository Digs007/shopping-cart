import React, { Component } from "react";
class Item extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <span className={this.getBadgesClass()}>{this.formatCounter()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.Item)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.Item.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgesClass = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.Item.value === 0 ? "warning" : "primary";
    return classes;
  };
  formatCounter = () => {
    const { value } = this.props.Item;
    return value === 0 ? "Zero" : value;
  };
}

export default Item;
