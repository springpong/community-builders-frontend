import React, { Component } from "react";
import ApiService from "../service/ApiService";
import Home from "./Home";
import NavBar from "../Layout/NavBar"

class CharityLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      password: "",
    };
    this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    } 

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        ApiService.fetchUsername()
    .then( res => {
        let username = res.data;
        this.setState({
          id: username.id,
          username: username.username,
          password: username.password,
        });
        console.log(this.state); 
      })
        
      }
  
      onChange = (e) =>
      this.setState({ [e.target.name]: e.target.value });

  saveUser = (e) => {
      e.preventDefault();
      let user = {id: this.state.id, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
      ApiService.editUser(user)
          .then(res => {
              this.setState({message : 'User added successfully.'});
              this.props.history.push('/CharityProfile');
          });
  }
  render() {
    return (
      <div>
        <NavBar />
        <h2 className="text-center">Charity Login</h2>
        <form>
        <div className="form-group">
            <label>User Name:</label>
            <input
              type="text"
              name="username"
              value={this.state.value}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.value}
              onChange={this.onChange}
            />
          </div>
          <button className="btn btn-success" onClick={this.saveUser}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default CharityLogin;
