import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top justify-content-between header-and-footer">
          <a href="/" className="navbar-brand">
            VAINGLORY TOOLS
          </a>
        </nav>
      </header>
    );
  }
}
