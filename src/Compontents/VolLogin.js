import React, { Component } from "react";
import NavBar from "./NavBar";

const data = { username: 'example' };
class VolLogin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       hits: [],
      };

      this.onChange = this.onChange.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
    }
  
    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    componentDidMount(event) {
      fetch('https://localhost:8080/VolSignup') 
        .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }))
  }
  
    render() {
      return (
        <div>
          <NavBar />
        <form id="login" onSubmit={this.onSubmit}>
          <h2>Volunteer Login</h2>
          <label>UserName:</label>
          <br />
          <input
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.onChange}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="passWord"
            value={this.state.passWord}
            onChange={this.onChange}
          />
          <br />
          <button id="signupbutton" type="submit">Signup</button>
        </form>
      </div>
      );
    }
  }
  
  export default VolLogin;