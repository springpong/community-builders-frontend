import React, { Component } from "react";
import NavBar from "./NavBar";

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
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
      fetch("http://localhost:8081/api/charity/user")
          .then( response => response.json())
          .then(
              // handle the result
              (result) => {
                  this.setState({
                      isLoaded : true,
                      posts : result
                  });
              },
  
              // Handle error 
              (error) => {
                  this.setState({
                      isLoaded: true,
                      error
                  })
              },
          )
      };
  
    render() {
      return (
        <div>
          <NavBar />
        <form id="login" onSubmit={this.onSubmit}>
          <h2>Charity Login</h2>
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
          <a href="http://localhost:8080/CharityProfile" target="_self">Signin</a>
        </form>
      </div>
      );
    }
  }
  
  class CharityLogin extends React.Component {
    render() {
      return (
        <div>
          <Login />
        </div>
      );
    }
  }

  export default CharityLogin;