import React, { Component } from 'react';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userName:"",
        passWord:"",
      };
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
    onChange = (e) => {       
       this.setState({ [e.target.name]: e.target.value });
    }
  
    onSubmit(event) {
      alert('A name was submitted: ' + this.state.userName + this.state.passWord);
      event.preventDefault();
    }  
  
    render() {
        return (
          <form onSubmit={this.onSubmit}>
           <h1>Charity Login</h1>
            UserName:
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.onChange}
            /><br/>
            Password:
            <input
              type="text"
              name="passWord"
              value={this.state.passWord}
              onChange={this.onChange}
            /><br/>
            <button type="submit">Submit</button>
          </form>
        );
      }
    }
  
  export default Login;