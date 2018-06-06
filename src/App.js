import React, { Component } from "react";
import { Button } from "reactstrap";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <article className="container text-center py-5">
          <h1 className="pt-5">VAINGLORY ICONS FONT</h1>
          <small className="d-block half-opacity pb-3">REFERENCE</small>

          <Button color="warning" size="lg">
            HOW TO USE
          </Button>
        </article>
      </React.Fragment>
    );
  }
}

export default App;
