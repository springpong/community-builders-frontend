import React from "react";

const Home = () => (
  <div>
<nav className="navbar navbar-inverse">
<div className="container-fluid">
    <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <img id="NavLogo"
            src="https://raw.githubusercontent.com/bethel-school-of-technology/community-builders-frontend/roxine1/builders.png" />
        <h1>Community Builders</h1>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
            <li><a href="http://localhost:8080">Home</a></li>
            <li><a href="http://localhost:8080/CharityEvent">Events</a>
            </li>
            <li><a href="http://localhost:8080/EventSignup">Esign</a></li>

        </ul> 
        <ul className="nav navbar-nav navbar-right">   
            <li><h1>Charities</h1></li>     
            <li><a href="http://localhost:8080/CharitySignup" target="_self">
                <span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="http://localhost:8080/CharityLogin"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
    </div>
</div>
</nav>
    <div className="about">
      Welcome to Community Builders! Join us as we partner with outreach
      programs around the world to deliver helping hands where they are needed
      most. Sign up as a charity or volunteer member to start building your
      community.
    </div>
  </div>
);

export default Home;
