import React, { Component } from "react";
import NavBar from "./NavBar";

class CharityLogin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: [],
      };
    };

  onSubmit = (e) => {
      fetch('http://localhost:8081/api/charity/user',{    
        mode: "no-cors",
      })
        .then(response => response.json())
        .then(data => this.setState({posts: data}));
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
          <button id="signupbutton" type="submit">Signup</button>
        </form> 
      <div>
        {this.state.posts.map((item, index) => (
          <div key={index}>
            <h1>{item.userName}</h1>
            <h1>{item.passWord}</h1>
          </div>
        ))}
      </div>
      </div>
     )}
  }
  
  export default CharityLogin;