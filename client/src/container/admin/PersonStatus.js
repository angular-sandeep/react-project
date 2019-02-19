import React, { Component } from "react";
import AdminNavbar from "./../shared/AdminNavbar";
import OperatorNavbar from './../shared/OperatorNavbar';
import Footer from "../shared/Footer";

import TableHeader from "./../shared/TableHeader";
import TableRow from "./../shared/TableRow";
import APIService from "./../../services/api";

class PersonStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        {
          UserName: "",
          Email: "",
          Mobile: "",
          Authorized: ""
        }
      ]
    };

    this.service = new APIService();
  }

  componentDidMount() {
    this.service
      .getAllUser()
      .then(res => res.json())
      .then(resp => {
        this.setState({ user: resp.user });
        //console.log(`user info is ${JSON.stringify(this.state.user)}` );
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
    //alert(JSON.stringify(e));
    const history = this.props.history;
    history.push(`/person/${e.UserId}`);
  }

  render() {
    return (
      <div>
        <AdminNavbar />
        <div className="container bg-light">
        <br />
        <div className="form-group">
            <label HtmlFor="inputState">User's Status Category</label>
            <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
                <option>...</option>
                <option>...</option>
            </select>
        </div>
          <h3 className="text-center">All User's info</h3>

          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                {Object.keys(this.state.user[0]).map((header, idx) => (
                  <TableHeader key={idx} header={header} />
                ))}
                <th>Action</th>
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

export default PersonStatus;
