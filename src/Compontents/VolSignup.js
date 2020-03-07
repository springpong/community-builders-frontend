import React, { Component } from "react";
import NavBar from "./NavBar";

class VolSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      VolName: "",
      Volemail: "",
      Voladdress: "",
      Volcity: "",
      Volstate: "",
      Volzipcode: "",
      VolphoneNumber: "",
      VoluserName: "",
      VolpassWord: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(event) {
    alert(
      "A name was submitted: " + this.state.VolName + this.state.Volcity
    );
    event.preventDefault();
  }

  render() {
    return (
      <div><NavBar />
      <form id="signup" onSubmit={this.onSubmit}>
        <h2>Volunteer Signup</h2>
        <label>UserName:</label>
        <br />
        <input
          type="text"
          name="userName"
          value={this.state.userName}
          onChange={this.onChange}/>
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          name="passWord"
          value={this.state.passWord}
          onChange={this.onChange}/>
        <br />
        <label>Volunteer Name:</label>
        <br />
        <input
          type="text"
          name="charityName"
          value={this.state.charityName}
          onChange={this.onChange}/>
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.onChange}/>
        <br />
        <label>Address:</label>
        <br />
        <input
          type="text"
          name="address"
          value={this.state.address}
          onChange={this.onChange}/>
        <br />
        <label>City:</label>
        <br />
        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this.onChange}/>
        <br />
        <label>State:</label>
        <br />
        <input
          type="text"
          name="state"
          value={this.state.state}
          onChange={this.onChange}
        />
        <br />
        <label>Zip Code:</label>
        <br />
        <input
          type="numbers"
          name="zipcode"
          value={this.state.zipcode}
          onChange={this.onChange}/>
        <br />
        <label>Phone Number:</label>
        <br />
        <input
          type="tel"
          name="phoneNumber"
          value={this.state.phoneNumber}
          onChange={this.onChange}/>
        <br />
        <button id="signupbutton" type="submit">Signup</button>
      </form>
    </div>
    );
  }
}

export default VolSignup;
