import React, { Component, Link, Route } from "react";
import ApiService from "../service/ApiService";
import Login from "./Login";
import Axios from "axios";
import CharitySignup from "./CharitySignup";

class CharityLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      username: "",
      password: "",
      loginErrors: ""
    };

  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value});
  }

  onLogin = () => {
     fetch("http://localhost:8080/login", {
     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
     method: "POST",
     body: JSON.stringify({ username: this.state.username, password: this.state.password })
     })
     .then(res => res.headers.get("authorization"))
     .then(token => {
       if (token) {
         this.setState({ ...this.state, token: token });
       } else {
         this.setState({ ...this.state, error: "Unable to login with username and password." });
       }
     });
   }

   onUsernameChange = (e) => this.setState({ ...this.state, username: e.target.value });
   onPasswordChange = (e) => this.setState({ ...this.state, password: e.target.value });

  render() {
    return (
        <header className="App-header">
       {(!this.state.token || this.state.token === "")
         ? (<Login onUsernameChange={this.onUsernameChange}
         onPasswordChange={this.onPasswordChange}
         onLogin={this.onLogin}
         error={this.state.error}></Login>)
         : (              <a href="http://localhost:8081/CharityProfile" target="_self">
         <span className="glyphicon glyphicon-user">Go to profile</span> 
       </a>)}
       </header>
    );
  }
}

export default CharityLogin;