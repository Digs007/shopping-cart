import React, { Component } from "react";
class App extends Component {
  state = {};
  render() {
    const { totalitems } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <i class="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
          {
            <span className="badge badge-pill badge-secondary">
              {totalitems}
            </span>
          }
        </a>
      </nav>
    );
  }
}

export default App;
