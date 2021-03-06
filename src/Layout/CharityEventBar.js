import React, {Component} from "react";
export default class NavBar extends Component {
  render() {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <img
            id="NavLogo"
            src="https://github.com/bethel-school-of-technology/community-builders-frontend/blob/Resources/builders.png?raw=true"
            alt="Logo"
          />
<<<<<<< HEAD
          <h4 className="navbar-brand">Community Builders</h4>
=======
        <h4 className="navbar-brand">Community Builders</h4>
>>>>>>> refs/remotes/origin/communitybuilders
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <a href="http://localhost:8080">Home</a>
            </li>
            <li>
              <a href="http://localhost:8080/CharityEvent">
                Volunteer Opportunties
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <h5 className="navbar-brand">Charities</h5>
            </li>
            <li>
              <a href="http://localhost:8080/CharitySignup" target="_self">
                <span className="glyphicon glyphicon-user"></span> Sign Up
              </a>
            </li>
            <li>
              <a href="http://localhost:8080/CharityLogin">
                <span className="glyphicon glyphicon-log-in"></span> Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}}

