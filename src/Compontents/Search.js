import React, { Component } from 'react';

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
          <form onSubmit={this.onSubmit}>
           <h1>Charity Search</h1>
            Charity Name:
            <input
              type="text"
              name="charityName"
              value={this.state.charityName}
              onChange={this.onChange}
            /><br/>
            Charity Type:
            <input
              type="text"
              name="charityType"
              value={this.state.charityType}
              onChange={this.onChange}
            /><br/>
            <button type="submit">Submit</button>
          </form>
        );
      }
    }
  
export default Search;