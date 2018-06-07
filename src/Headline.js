import React from "react";
import { Button } from "reactstrap";

export default class Headline extends React.Component {
  render() {
    return (
      <div>
        <h1 className="pt-5">VAINGLORY ICONS FONT</h1>
        <div className="small d-block half-opacity pb-3">REFERENCE</div>
        <Button color="warning" size="lg">
          HOW TO USE
        </Button>
      </div>
    );
  }
}
