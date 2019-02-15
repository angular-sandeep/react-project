import React, { Component } from "react";
import UserNavbar from "./../shared/UserNavbar";

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <UserNavbar />
      </div>
    );
  }
}

export default UserComponent;
