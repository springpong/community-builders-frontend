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
        const { charityName, charityType } = this.state;

        post('/post', { charityName, charityType })
          .then((result) => {
           console.log (charityName,charityType)
          });
      }
  
    render() {
        const { charityName, charityType } = this.state;
        return (
          <form onSubmit={this.onSubmit}>
           <h1>Charity Search</h1>
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
            <button type="submit">Submit</button>
          </form>
        );
      }
    }
  
export default Search;