import React, { Component } from 'react';

class List extends React.Component {
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
      };
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
    onChange = (e) => {    
       this.setState({ [e.target.name]: e.target.value });
    }
  
    onSubmit(event) {
      alert('A name was submitted: ' + this.state.charityName);
      event.preventDefault();
    }
  
  
    render() {
        return (
          <form id="list" onSubmit={this.onSubmit}>
            <h2>Charity List</h2>
            Charity Type:
            <input
              type="text"
              name="charityType"
              value={this.state.charityType}
              onChange={this.onChange}
            /><br/>
            Charity Name:
            <input
              type="text"
              name="charityName"
              value={this.state.charityName}
              onChange={this.onChange}
            /><br/>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            /><br/>
            Address:
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.onChange}
            /><br/>
            City:
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.onChange}
            /><br/>
            State:
            <input
              type="text"
              name="state"
              value={this.state.state}
              onChange={this.onChange}
            /><br/>
            Zip Code:
            <input
              type="numbers"
              name="zipcode"
              value={this.state.zipcode}
              onChange={this.onChange}
            /><br/>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.onChange}
            /><br/>
            <button type="submit">Signup</button>
          </form>
        );
      }
    }
    class Search extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            charityName:"",
            charityType:"",
          };
      
          this.onChange = this.onChange.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
        }
      
        onChange = (e) => {    
           this.setState({ [e.target.name]: e.target.value });
        }
      
        onSubmit(event) {
          alert('A name was submitted: ' + this.state.charityType);
          event.preventDefault();
        }
      
        render() {
            return (
              <form id="search" onSubmit={this.onSubmit}>
               <h2>Charity Search</h2>
               Charity Type:
                <input
                  type="text"
                  name="charityType"
                  value={this.state.charityType}
                  onChange={this.onChange}
                /><br/>
                Charity Name:
                <input
                  type="text"
                  name="charityName"
                  value={this.state.charityName}
                  onChange={this.onChange}
                /><br/>
                <button type="submit">Search</button>
              </form>
            );
          }
        }
class Volunteer extends React.Component{
            render(){
                return(
                    <div>
                    <List />
                    <Search />
                    </div>
                );
            }
        }

export default Volunteer;