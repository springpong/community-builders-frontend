import React, { Component } from "react";
import ApiService from "../service/ApiService";
import CharityProfileBar from "../Layout/CharityProfileBar";

class CharityView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      message: null,
      username: localStorage.getItem("username"),
      token: window.sessionStorage.getItem("token")
    };
    this.loadUser = this.loadUser.bind(this);
  }
 
  componentDidMount() {
    this.loadUser();
}

loadUser() {
    ApiService.fetchUsername(window.sessionStorage.setItem("username", this.username))
        .then((res) => {
            let user = res.data.result;
            this.setState({
            id: user.id,
            username: user.username,
            charityTitle: user.charityTitle
            })
        });
}

render() {
  return (
      <div>
        <CharityProfileBar />
          <h2 className="text-center">Profile</h2>
          <div>
          <div className="form-group">
                  <label>Charity Title:</label>
                  <label name="charityTitle">{this.state.charityTitle}</label>
              </div>
              <div className="form-group">
                  <label>Charity Name:</label>
                  <label name="charityName">{this.state.charityName}</label>
              </div>
              <div className="form-group">
                  <label>Charity Category:</label>
                  <label name="charityCat">{this.state.charityCat}</label>
              </div>
              <div className="form-group">
                  <label>Charity Street:</label>
                  <label name="charityStreet">{this.state.charityStreet}</label>
              </div>
              <div className="form-group">
                  <label>Charity City:</label>
                  <label name="charityCity">{this.state.charityCity}</label>
              </div>
              <div className="form-group">
                  <label>Charity State:</label>
                  <label name="charityState">{this.state.charityState}</label>
              </div>
              <div className="form-group">
                  <label>Charity Zip Code:</label>
                  <label name="charityZip">{this.state.charityZip}</label>
              </div>
              <div className="form-group">
                  <label>Charity Phone number:</label>
                  <label name="charityPhone">{this.state.charityPhone}</label>
              </div>
          </div>
      </div>
  );
}
}

export default CharityView;