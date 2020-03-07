import React from "react";
import NavBar from "./NavBar";

const Home = () => (
  <div className="home">
    <NavBar />
    <div className="clink">
      <h3>I'm a Charity</h3>
      <a href="http://localhost:8080/Charity" target="_self">
        SignUp
      </a>
      <a href="http://localhost:8080/CharityLogin" target="_self">
        Login
      </a>
    </div>
    <div className="vlink">
      <h3>I'm a Volunteer</h3>
      <a href="http://localhost:8080/Volunteer" target="_self">SignUp</a>
      <a href="http://localhost:8080/VolunteerLogin" target="_self">Login</a>
    </div>
    <img id="homelogo" src="https://raw.githubusercontent.com/bethel-school-of-technology/community-builders-frontend/roxine1/builders.png" />
    <h1 className="head">Community Builders</h1>
    <div className="about">
      {" "}
      Welcome to Community Builders! Join us as we partner with outreach
      programs around the world to deliver helping hands where they are needed
      most. Sign up as a charity or volunteer member to start building your
      community.
    </div>
  </div>
);

export default Home;
