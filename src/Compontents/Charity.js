import React, { Component } from "react";

class Signup extends React.Component {
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
      <form id="signup" onSubmit={this.onSubmit}>
        <h2>Charity Signup</h2>
        <label>Charity Type:</label>
        <input
          type="text"
          name="charityType"
          value={this.state.charityType}
          onChange={this.onChange}/>
        <br />
        <label>Charity Name:</label>
        <input
          type="text"
          name="charityName"
          value={this.state.charityName}
          onChange={this.onChange}/>
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.onChange}/>
        <br />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={this.state.address}
          onChange={this.onChange}/>
        <br />
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this.onChange}/>
        <br />
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={this.state.state}
          onChange={this.onChange}
        />
        <br />
        <label>Zip Code:</label>
        <input
          type="numbers"
          name="zipcode"
          value={this.state.zipcode}
          onChange={this.onChange}/>
        <br />
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={this.state.phoneNumber}
          onChange={this.onChange}/>
        <br />
        <label>UserName:</label>
        <input
          type="text"
          name="userName"
          value={this.state.userName}
          onChange={this.onChange}/>
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="passWord"
          value={this.state.passWord}
          onChange={this.onChange}/>
        <br />
        <button type="submit">Signup</button>
      </form>
    );
  }
}

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
    fetch("https://jsonplaceholder.typicode.com/posts")
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
      <form id="login" onSubmit={this.onSubmit}>
        <h2>Charity Login</h2>
        <label>UserName:</label>
        <input
          type="text"
          name="userName"
          value={this.state.userName}
          onChange={this.onChange}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="passWord"
          value={this.state.passWord}
          onChange={this.onChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
class Charity extends React.Component {
  render() {
    return (
      <div>
        <Signup />
        <Login />
      </div>
    );
  }
}

export default Charity;
