import React, { Component } from "react";
import "./style.css";
import NavBar from "./Navbar";
import Footer from "../shared/Footer";

class AdminComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default AdminComponent;
