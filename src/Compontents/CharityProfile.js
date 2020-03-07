import React, { Component } from "react";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: ''    };
  }

  callAPI() {
    fetch("http://localhost:8081/api/charity/user")
      .then(response => response.json())
      .then(data => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount (){
      this.callAPI();
  }

  render() {
    return (
      <form id="update" onSubmit={this.onSubmit}>
        <h2>Charity update</h2>
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
        <label>Event:</label>
        <input
          type="password"
          name="event"
          value={this.state.event}
          onChange={this.onChange}/>
        <br />
        <button type="submit">Update</button>
      </form>
    );
  }
}

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: ''    };
  }

  callAPI() {
    fetch("http://localhost:8080/api/charity/user")
      .then(response => response.json())
      .then(data => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount (){
      this.callAPI();
  }


  render() {
    const { hits } = this.state;
    return (
      <form id="delete" onSubmit={this.onSubmit}>
        <h2>Charity Delete</h2>
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
        <label>Event:</label>
        <input
          type="password"
          name="event"
          value={this.state.event}
          onChange={this.onChange}/>
        <br />
        <button type="submit">Delete</button>
      </form>
    );
  }
}
class CharityProfile extends React.Component {
    render() {
      return (
        <div>
          <Update />
          <Delete />
        </div>
      );
    }
  }
export default CharityProfile;
