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
              <th>Charity Phone</th>
              <th>Event Name</th>
              <th>Event Location</th>
              <th>Event Date</th>
              <th>Event Time</th>
              <th>Event Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.events.map(event => (
              <tr key={user.id}>
                <td>{event.charityName}</td>
                <td>{event.charityPhone}</td>
                <td>{event.eventName}</td>
                <td>{event.eventLocation}</td>
                <td>{event.eventDate}</td>
                <td>{event.eventTime}</td>
                <td>{event.eventDescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CharityEvent;
