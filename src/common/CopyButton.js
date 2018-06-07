import React, { Component } from "react";

import copy from "copy-to-clipboard";

import { Button } from "reactstrap";

import "./CopyButton.css";

export default class CopyButton extends Component {
  state = { copied: false };

  componentWillUnmount() {
    // Making sure we clear the timeout if component is unmounted
    if (this.timeout) clearTimeout(this.timeout);
  }

  onClick = e => {
    this.setState({ copied: true });
    copy(this.props.copy);

    this.timeout = setTimeout(() => this.setState({ copied: false }), 2000);
  };

  render() {
    return (
      <div style={{ position: "relative" }}>
        {this.state.copied && <span className="copyFloating">Copied!</span>}
        <Button onClick={this.onClick} size="sm">
          Copy
        </Button>
      </div>
    );
  }
}
