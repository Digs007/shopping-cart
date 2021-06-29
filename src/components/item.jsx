import React, { Component } from "react";
class Item extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="row">
        <div className="col-md-1">
          <span style={{ fontSize: 24 }} className={this.getBadgesClass()}>
            {this.formatCounter()}
          </span>
        </div>
        <div className="col-md-4">
          <button
            onClick={() => this.props.onIncrement(this.props.Item)}
            className="btn btn-secondary"
          >
            <i className="fa fa-plus-circle" aria-hidden="true" />
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.Item)}
            className="btn btn-info m-2"
            disabled={this.props.Item.value === 0 ? "disabled" : ""}
          >
            <i className="fa fa-minus-circle" aria-hidden="true" />
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.Item.id)}
            className="btn btn-danger"
          >
            <i className="fa fa-trash-o" aria-hidden="true" />
          </button>
        </div>
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
