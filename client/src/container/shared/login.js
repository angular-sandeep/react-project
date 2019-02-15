import React, { Component } from "react";
import APIService from "./../../services/api";

import "./style.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };

    this.service = new APIService();
  }

  onChangeUser(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onLogin(e) {
    const history = this.props.history;
    
    let user = {
      UserName: this.state.userName,
      Password: this.state.password
    };
    console.log(user);

    this.service
      .isAuthenticate(user)
      .then(res => res.json())
      .then(resp => {
        localStorage.setItem("token", `Bearer ${resp.token}`);
        if (resp.role === "Admin") {
          history.push("/admin-dashboard");
        } else if (resp.role === "Operator") {
          history.push("/operator-dashboard");
        } else {
          history.push("/user-dashboard");
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container bg-light login login">
        <div className=" row  justify-content-center align-items-center">
          <div className="col-md-7">
            <h1 className="text-center">Login Page</h1>
            <hr />
            <form>
              <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  value={this.state.userName}
                  onChange={this.onChangeUser.bind(this)}
                  placeholder="Sandeep.pal"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangeUser.bind(this)}
                  placeholder="*****************"
                />
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={this.onLogin.bind(this)}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
