import React, { Component } from "react";

const cors = require("cors");
class View extends Component {
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

render(){
    return (
    <div>
        <h3>Charity Profile</h3>
        <h5>Charity Name:</h5>
        <p name='charityName'
        value={this.state.charityName}></p>


    </div>
    )
}}
class CharityViewProfile extends React.Component {
    render() {
      return (
        <div>
          <View />
        </div>
      );
    }
  }
export default CharityViewProfile;