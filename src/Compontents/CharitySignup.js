import React, { Component } from "react";
import NavBar from "./NavBar";
import ApiService from "./ApiService"

class CharitySignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      charityTitle: '',
      charityName: '',
      charityCat: '',
      charityStreet: '',
      charityCity: '',
      charityState: '',
      charityZip: '',
      charityPhone: '',
      charityLogoLink: '',
      message: null
    }
    this.saveUser = this.saveUser.bind(this);
  }

  saveUser = (e) => {
    e.preventDefault();
    let user = {username: this.state.username, password: this.state.password, charityTitle: this.state.charityTitle, charityName: this.state.charityName, charityCat: this.state.charityCat, charityStreet: this.state.charityStreet, charityCity: this.state.charityCity, charityState: this.state.CharityState, charityZip: this.state.charityZip, charityPhone: this.state.charityPhone, charityLogoLink: this.state.charityLogoLink};
    ApiService.addUser(user)
            .then(() => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/user');
            })
          }

          onChange = (e) =>
          this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <NavBar />
        <h2>Create Charity Account</h2>
        <form>
          <div>
            <label>Username:</label>
            <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}/>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/>
          </div>
          <div>
          <label>Charity Name:</label>
          <input placeholder="Charity Name" name="charityName" value={this.state.charityName} onChange={this.onChange}/>
          </div>
          <div>
            <label>Charity Title:</label>
            <input placeholder="Charity Title" name="charityTitle" value={this.state.charityTitle} onChange={this.onChange}/>
          </div>
          <div>
            <label>Charity Category:</label>
            <input placeholder="Category" name="charityCat" value={this.state.charityCat} onChange={this.onChange}/>
          </div>
          <div>
            <label>Street:</label>
            <input placeholder="Street" name="charityStreet" value={this.state.charityStreet} onChange={this.onChange}/>
          </div>
          <div>
            <label>City:</label>
            <input placeholder="City" name="charityCity" value={this.state.charityCity} onChange={this.onChange}/>
          </div>
          <div>
            <label>State:</label>
            <input placeholder="State" name="charityState" value={this.state.charityState} onChange={this.onChange}/>
          </div>
          <div>
            <label>Zip Code:</label>
            <input type="number" name="CharityZip" value={this.state.charityZip} onChange={this.onChange}/>
          </div>
          <div>
            <label>Phone Number:</label>
            <input placeholder="Phone Number" name="charityPhone" value={this.state.charityPhone} onChange={this.onChange}/>
          </div>
          <div>
            <label>Charity Logo url Link:</label>
            <input placeholder="Enter link to charity Logo" name="charityLogoLink" value={this.state.charityLogoLink} onChange={this.onChange}/>
          </div>
          <button onClick={this.saveUser}>Save</button>
        </form>
      </div>  
    );
  }
}

export default CharitySignup;
