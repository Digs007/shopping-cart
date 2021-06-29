import React, { Component } from "react";
import Item from "./item";
class ShoppingList extends Component {
  state = {
    Items: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.Items.map((item) => (
          <Item key={item.id} value={item.value} id={item.id} />
        ))}
      </div>
    );
  }
}

export default ShoppingList;
