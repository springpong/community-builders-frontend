import React, { Component } from "react";

class CharityView extends Component {
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

export default CharityView;