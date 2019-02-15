import React, { Component } from "react";
import "./style.css";
import OperatorNavbar from "./../shared/OperatorNavbar";

class OperatorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <OperatorNavbar />
      </div>
    );
  }
}

export default OperatorComponent;
