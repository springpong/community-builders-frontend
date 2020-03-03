import React, { Component } from "react";

class CharityEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charityName: "",
      charityType: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      phoneNumber: "",
      userName: "",
      passWord: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(event) {
    alert(
      "A name was submitted: " + this.state.charityName + this.state.charityType
    );
    event.preventDefault();
  }

  render() {
    return (
      <table>
        <tr>
          <th>Charity Type</th>
          <th>Charity Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zipcode</th>
          <th>Phone Number</th>
          <th>UserName</th>
          <th>Password</th>
          <th>Event</th>
        </tr>
        <tr>
          <td>Alfreds </td>
          <td>Maria Anders</td>
          <td>ar</td>
          <td>Alfreds </td>
          <td>Maria Anders</td>
          <td>ar</td>
          <td>Alfreds </td>
          <td>Maria Anders</td>
          <td>ar</td>
          <td>Alfreds </td>
          <td>Maria Anders</td>
        </tr>
        <tr>
          <td>Centro </td>
          <td> Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus </td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini  Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>
    );
  }
}
export default CharityEvent;
