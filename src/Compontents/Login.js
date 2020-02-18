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
  
    onChange = (e) => {       /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
       this.setState({ [e.target.name]: e.target.value });
    }
  
    onSubmit(event) {
        e.preventDefault();
        // get our form data out of state
        const { userName, passWord } = this.state;

        post('/post', { userName, passWord })
          .then((result) => {
           console.log (userName,passWord)
          });
      }
  
    render() {
        const { userName, passWord } = this.state;
        return (
          <form onSubmit={this.onSubmit}>
           <h1>Charity Login</h1>
            UserName:
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={this.onChange}
            /><br/>
            Password:
            <input
              type="text"
              name="passWord"
              value={passWord}
              onChange={this.onChange}
            /><br/>
            <button type="submit">Submit</button>
          </form>
        );
      }
    }
  
  export default Login;