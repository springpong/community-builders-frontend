import React, { Component } from "react";
import ApiService from "../service/ApiService";
import NavBar from "./NavBar";

class CharityLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: "",
      username: "",
      password: "",
    };
    this.saveUser = this.saveUser.bind(this);
    this.loadUser = this.loadUser.bind(this);
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    ApiService.fetchUserById(window.localStorage.getItem("userId")).then(
      res => {
        let user = res.data;
        this.setState({
          id: user.Id,
          username: user.username,
          password: user.password,
        });
      }
    );
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  saveUser = e => {
    e.preventDefault();
    let user = {
      id: this.state.id,      
      username: this.state.username,
      password: this.state.password,
    };
    ApiService.editUser(user).then(res => {
      this.setState({ message: "User added successfully." });
      this.props.history.push("/CharityProfile");
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <h2 className="text-center">Edit User</h2>
        <form>
        <div className="form-group">
            <label>User Name:</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={this.state.value}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={this.state.value}
              onChange={this.onChange}
            />
          </div>
          <button className="btn btn-success" onClick={this.saveUser}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default CharityLogin;
