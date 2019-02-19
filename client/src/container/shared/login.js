import React, { Component } from "react";
import APIService from "./../../services/api";

import "./style.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      loginStatus: false
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

    this.service
      .isAuthenticate(user)
      .then(res => res.json())
      .then(resp => {
        if (resp.status === 401) {
          this.setState({ loginStatus: true });
        } else {
          localStorage.setItem("token", `Bearer ${resp.token}`);
          if (resp.role === "Admin") {
            localStorage.setItem("_v_it", '1');
            history.push("/admin-dashboard");
          } else if (resp.role === "Operator") {
            localStorage.setItem("_v_it", '2');
            history.push("/operator-dashboard");
          } else {
            localStorage.setItem("_v_it", '3');
            history.push(`/user-dashboard/${resp.UserId}`);
          }
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
            {this.state.loginStatus ? (
              <span
                className="alert alert-danger col-md-12 row align-items-center"
                role="alert"
              >
                Please Enter correct Username and Password
              </span>
            ) : null}
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
