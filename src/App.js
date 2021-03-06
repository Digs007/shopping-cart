import React, { Component } from "react";
import ShoppingList from "./components/shoppingList";
import NavBar from "./components/navbar";
// import { timers } from "jquery";

class App extends Component {
  state = {
    Items: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  handleIncrement = (item) => {
    const Items = [...this.state.Items];
    const index = Items.indexOf(item);
    Items[index].value++;
    this.setState({ Items });
    // console.log(Items);
  };
  handleDecrement = (item) => {
    const Items = [...this.state.Items];
    const index = Items.indexOf(item);
    Items[index].value--;
    this.setState({ Items });
    // console.log(Items);
  };
  handleDelete = (itemId) => {
    const Items = this.state.Items.filter((c) => c.id !== itemId);
    this.setState({ Items });
    // console.log(Items);
  };
  handleReset = () => {
    const Items = this.state.Items.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ Items });
  };
  handleLoad = () => {
    window.location.reload();
  };
  render() {
    return (
      <div className="App">
        <NavBar
          totalitems={this.state.Items.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <ShoppingList
            onReset={this.handleReset}
            onLoad={this.handleLoad}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            Items={this.state.Items}
          />
        </main>
      </div>
    );
  }
}

export default App;
