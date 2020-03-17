import React, { Component } from "react";
import ApiService from "../service/ApiService";
import CharitySignupBar from "../Layout/CharitySignupBar";
import Axios from "axios";

class CharityLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
      loginErrors: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value});
  }

  onSubmit(event) {
    const { userId, password} = this.state;
    Axios.post("http://localhost:8081/api/charity/user/",{
      userId,
      password
    },
    console.log('sent response')
    )
    .then( res => {
      let user = res.data;
      this.setState({
        userId: user.userId,
        password: user.password,
      });
      console.log(this.state); 
      this.props.history.push('/CharityProfile');
    })
      .catch(error => {
        console.log("login error", error);
      });
      event.preventDefault();
  }

  render() {
    return (
      <div>
        <CharitySignupBar />
        <h2 className="text-center">Charity Login</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>User Name:</label>
            <input 
              type="text"
              name="userId"
              value={this.state.userId}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <button className="btn btn-success" onClick={this.loadUser}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default CharityLogin;
