import React, { Component } from "react";
import ShoppingList from "./components/shoppingList";
import NavBar from "./components/navbar";
import "./App.css";
// import { timers } from "jquery";

class App extends Component {
  state = {
    Items: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (item) => {
    console.log(item);
  };
  handleDelete = (itemId) => {
    console.log(itemId);
  };
  handleReset = () => {
    console.log("All reset to zero");
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <main className="container">
          <ShoppingList
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            Items={this.state.Items}
          />
        </main>
      </div>
    );
  }
}

export default App;
