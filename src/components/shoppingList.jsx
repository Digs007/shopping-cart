import React, { Component } from "react";
import Item from "./item";
class ShoppingList extends Component {
  render() {
    const { onReset, onLoad, onIncrement, onDecrement, onDelete, Items } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-success m-2">
          <i className="fa fa-refresh" aria-hidden="true" />
        </button>
        <button onClick={onLoad} className="btn btn-success m-2">
          <i class="fa fa-recycle" aria-hidden="true"></i>
        </button>
        {Items.map((item) => (
          <Item
            key={item.id}
            Item={item}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default ShoppingList;
