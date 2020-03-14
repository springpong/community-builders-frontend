import React, { Component } from "react";
import ApiService from "../service/ApiService";
import NavBar from "./NavBar";

class CharityView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
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
    ApiService.fetchUsers()
      .then (response => {
        console.log(response.data);
      this.setState({ users: response.data });
    });
  }

  deleteUser(userId) {
    ApiService.deleteUser(userId)
       .then(res => {
           this.setState({message : 'User deleted successfully.'});
           this.setState({users: this.state.users.filter(user => user.id !== userId)});
       })

}

editUser(id) {
    window.localStorage.setItem("userId", id);
    this.props.history.push('/edit-user');
}

addUser() {
    window.localStorage.removeItem("userId");
    this.props.history.push('/CharitySignup');
}

  render() {
    return (
      <div>
        <NavBar />
        <h2 className="text-center">User Details</h2>
        <button className="btn btn-danger" onClick={() => this.addUser()}>
          {" "}
          Add User
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Charity Title</th>
              <th>Charity Name</th>
              <th>Charity Cat</th>
              <th>Charity Street</th>
              <th>Charity City</th>
              <th>Charity state</th>
              <th>Charity Zip code</th>
              <th>Charity Phone</th>
              <th>Delete/Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
                <tr key={user.id}>
                <td>{user.charityTitle}</td>
                <td>{user.charityName}</td>
                <td>{user.charityCat}</td>
                <td>{user.charityStreet}</td>
                <td>{user.charityCity}</td>
                <td>{user.charityState}</td>
                <td>{user.charityZip}</td>
                <td>{user.charityPhone}</td>
                <td>
                <button className="btn btn-success" onClick={() => this.deleteUser(user.id)}> Delete</button>
                <button className="btn btn-success" onClick={() => this.editUser(user.id)}> Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CharityView;
