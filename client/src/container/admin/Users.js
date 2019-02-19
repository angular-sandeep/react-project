import React, { Component } from "react";
import AdminNavbar from "./../shared/AdminNavbar";
import OperatorNavbar from './../shared/OperatorNavbar';
import Footer from "../shared/Footer";
import OptionComponent from './../../components/OptionComponent';

import TableHeader from "./../shared/TableHeader";
import TableRow from "./../shared/TableRow";
import APIService from "./../../services/api";

class Users extends Component {
  constructor(props) {
    super(props);
    var id =  1;
    this.state = {
      user: [
        {
          UserName: "",
          Email: "",
          Mobile: "",
          Authorized: ""
        }
      ],
      UserStatusCategoryType: "",
      UserStatusCategory: [ "Please select user status category", "Pending", "Approved", "Rejected"],
    };

    

    //Role: ["Approved", "Pending", "Rejected", "All"],
    this.service = new APIService();
  }

  componentDidMount() {
    this.service
      .getAllUser()
      .then(res => res.json())
      .then(resp => {
        this.setState({ user: resp.user });
      })
      .catch(err => console.log(err));
  }

  onAuthorized(e) {
    this.service
    .isAuthorized({Email:e.Email})
    .then(res => res.json())
    .then(resp => {
      //console.log(`user info is ${JSON.stringify(resp.user)}` );
      this.setState({user: resp.user});
    })
    .catch(err => console.log(err));
  }

  onPersonInfo(e){
    const history = this.props.history;
    history.push(`/person/${e.UserId}`);
  }
  onChangeProduct(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  test(e){
    console.log(e.target.value);
  }
  render() {
    return (
      <div>
        <AdminNavbar />
        <div className="container bg-light">

        <br />
        <div className="form-group">
            <label htmlFor="userStatusCategory">User's Status Category</label>
            <select
              type="text"
              className="form-control"
              name="userStatusCategory"
              value={this.state.userStatusCategory}
              onChange={this.test.bind(this)}
            >
              {this.state.UserStatusCategory.map((c, i) => (
                <OptionComponent key={i} data={c} />
              ))}
            </select>
        </div>

         
          <h3 className="text-center">All User's info</h3>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                {Object.keys(this.state.user[0]).map((header, idx) => (
                  <TableHeader key={idx} header={header} />
                ))}
                {localStorage.getItem("_v_it") == 1 ?<th>Action</th> : null}      
              </tr>
            </thead>
            <tbody>
              {this.state.user.map((v, i) => (          
                <TableRow
                  key={i}
                  rec={v}
                  selected={this.onAuthorized.bind(this)}
                  person={this.onPersonInfo.bind(this)}
                />
              ))}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Users;
