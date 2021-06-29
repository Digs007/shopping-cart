import React, { Component } from "react";
import Item from "./item";
class ShoppingList extends Component {
  render() {
    const { onReset, onIncrement, onDelete, Items } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {Items.map((item) => (
          <Item
            key={item.id}
            Item={item}
            onIncrement={onIncrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default ShoppingList;
