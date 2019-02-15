import React, { Component } from "react";
import "./style.css";
import NavBar from "./Navbar";

class AdminComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default AdminComponent;
