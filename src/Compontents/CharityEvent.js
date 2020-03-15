import React, { Component } from "react";
import ApiService from "../service/ApiService";
import Home from "./Home";

class CharityEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      message: null
    }; 
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.reloadUserList = this.reloadUserList.bind(this);
  }

  componentDidMount() {
    this.reloadUserList();
  }

  reloadUserList() {
    ApiService.fetchUsers().then(response => {
      console.log(response.data);
      this.setState({ events: response.data });
    });
  }

  deleteUser(userId) {
    ApiService.deleteUser(userId).then(res => {
      this.setState({ message: "User deleted successfully." });
      this.setState({
        users: this.state.users.filter(user => user.id !== userId)
      });
    });
  }

  editUser(id) {
    window.localStorage.setItem("userId", id);
    this.props.history.push("/edit-user");
  }

  addUser() {
    window.localStorage.removeItem("userId");
    this.props.history.push("/CharitySignup");
  }

  render() {
    return (
      <div>
        <Home />
        <h2 className="text-center">CharityEvents </h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Charity Name</th>
              <th>Charity Street</th>
              <th>Charity City</th>
              <th>Charity state</th>
              <th>Charity Zip code</th>
              <th>Charity Phone</th>
              <th>Charity Events</th>
            </tr>
          </thead>
          <tbody>
            {this.state.events.map(user => (
              <tr key={user.id}>
                <td>{user.charityName}</td>
                <td>{user.charityStreet}</td>
                <td>{user.charityCity}</td>
                <td>{user.charityState}</td>
                <td>{user.charityZip}</td>
                <td>{user.charityPhone}</td>
                <td>{user.charityEvents}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CharityEvent;
