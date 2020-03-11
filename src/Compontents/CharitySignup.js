import React, { Component } from "react";
import NavBar from "./NavBar";

class CharitySignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const data = { username: "", passWord: "" };

    fetch(
      "http://localhost:8081/api/charity/user/mack", {
        method: "POST", // or 'PUT'
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then((data) => {
          console.log("sucess", data);
        })
        .catch(error => {
          console.error("error:", error);
        })
  };

  render() {
    return (
      <div>
        <NavBar />
        <form id="signup" onSubmit={this.onSubmit}>
          <h2>Charity Signup</h2>
          <label>UserName:</label>
          <br />
          <input type="text" name="userName" onChange={this.onChange} />
          <br />
          <label>Password:</label>
          <br />
          <input type="password" name="passWord" onChange={this.onChange} />
          <br />
          <label>Charity Title:</label>
          <br />
          <select
            type="text"
            name="charityTitle"
            value={this.state.charityTitle}
            onChange={this.onChange}
          >
            <option value="FoodPantry">Food Pantry</option>
            <option value="Homeless shelter">Homeless Shelter</option>
            <option value="Soup Kitchen">Soup Kitchen</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <label>Charity Name:</label>
          <br />
          <input
            type="text"
            name="charityName"
            value={this.state.charityName}
            onChange={this.onChange}
          />
          <br />
          <label>Catagory:</label>
          <br />
          <input
            type="email"
            name="charityCat"
            value={this.state.CharityCat}
            onChange={this.onChange}
          />
          <br />
          <label>Street:</label>
          <br />
          <input
            type="text"
            name="street"
            value={this.state.CharityStreet}
            onChange={this.onChange}
          />
          <br />
          <label>City:</label>
          <br />
          <input
            type="text"
            name="charityCity"
            value={this.state.CharityCity}
            onChange={this.onChange}
          />
          <br />
          <label>State:</label>
          <br />
          <input
            type="text"
            name="charityState"
            value={this.state.CharityState}
            onChange={this.onChange}
          />
          <br />
          <label>Zip Code:</label>
          <br />
          <input
            type="numbers"
            name="charityZipcode"
            value={this.state.charityZipcode}
            onChange={this.onChange}
          />
          <br />
          <label>Phone Number:</label>
          <br />
          <input
            type="tel"
            name="charityPhone"
            value={this.state.charityPhone}
            onChange={this.onChange}
          />
          <br />
          <button id="signupbutton" type="submit">
            Signup
          </button>
        </form>
        <div>
          {this.state.data.map((item, index) => (
            <div key={index}>
              <h1>{item.userName}</h1>
              <h1>{item.passWord}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CharitySignup;
