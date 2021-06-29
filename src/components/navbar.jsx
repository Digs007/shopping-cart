import React, { Component } from "react";
class App extends Component {
  state = {};
  render() {
    // console.log(this.props.totalitems);
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Total{" "}
          {/* <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span> */}
        </a>
      </nav>
    );
  }
}

export default App;
