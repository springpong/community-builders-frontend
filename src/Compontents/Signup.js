import React, { Component } from 'react';

class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        charityName: '',
        charityType: '',
        email: '',
        address:'',
        city: '', 
        state: '', 
        zipcode: '',
        phoneNumber:'',
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
        const { charityName, charityType, email, address, city, state, zipcode, phoneNumber, userName, passWord } = this.state;

        post('/Signup', { charityName, charityType, email, address, city, state, zipcode, phoneNumber, userName, passWord })
          .then((result) => {
           
          });
      }
  
    render() {
        const { charityName, charityType, email, address, city, state, zipcode, phoneNumber, userName, passWord } = this.state;
        return (
          <form onSubmit={this.onSubmit}>
            <h1>Charity Signup</h1>
            Charity Name:
            <input
              type="text"
              name="charityName"
              value={charityName}
              onChange={this.onChange}
            /><br/>
            Charity Type:
            <input
              type="text"
              name="charityType"
              value={charityType}
              onChange={this.onChange}
            /><br/>
            Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.onChange}
            /><br/>
            Address:
            <input
              type="text"
              name="address"
              value={address}
              onChange={this.onChange}
            /><br/>
            City:
            <input
              type="text"
              name="city"
              value={city}
              onChange={this.onChange}
            /><br/>
            State:
            <input
              type="text"
              name="state"
              value={state}
              onChange={this.onChange}
            /><br/>
            Zip Code:
            <input
              type="numbers"
              name="zipcode"
              value={zipcode}
              onChange={this.onChange}
            /><br/>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.onChange}
            /><br/>
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
            <button type="submit">Signup</button>
          </form>
        );
      }
    }
  
  export default Signup;