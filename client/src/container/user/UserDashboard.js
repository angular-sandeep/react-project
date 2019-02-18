import React, { Component } from "react";
import UserNavbar from "./../shared/UserNavbar";
import Footer from "../shared/Footer";

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <UserNavbar />
        <Footer />
      </div>
    );
  }
}

export default UserComponent;
