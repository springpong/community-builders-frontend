import React, { Component, Link, Route } from "react";
import ApiService from "../service/ApiService";
import Login from "./Login";
import Axios from "axios";
import CharitySignup from "./CharitySignup";
import CharityView from './CharityView';

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
         this.setState({ ...this.state, error: "Incorrect username and/or password." });
       }
     });
   }

   onUsernameChange = (e) => this.setState({ ...this.state, username: e.target.value });
   onPasswordChange = (e) => this.setState({ ...this.state, password: e.target.value });

   loadUser(username){
    window.sessionStorage.setItem("token", token);
    window.sessionStorage.setItem("username", username);
  }

  render() {
    return (
        <header className="App-header">
       {(!this.state.token || this.state.token === "")
         ? (<Login onUsernameChange={this.onUsernameChange}
         onPasswordChange={this.onPasswordChange}
         onLogin={this.onLogin}
         error={this.state.error}></Login>)
         : (             
           <div>
             <h4>Login successful</h4>
           <a href="http://localhost:8081/CharityView" target="_self">
         <span><button onClick ={this.loadUser}>Go to profile</button></span> 
       </a>
       <a href="http://localhost:8081/EventSignup" target="_self">
         <span><button onClick ={this.loadUser}>Create an Event</button></span> 
       </a>
       </div>
       )}
       </header>
    );
  }
}

export default CharityLogin;