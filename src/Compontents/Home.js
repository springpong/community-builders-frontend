import React from "react";

const Home = () => (
  <div className="home">
    <div className="clink">
      <h3>I'm a Charity</h3>
      <a href="http://localhost:8080/Charity" target="_blank">
        SignUp
      </a>
      <a href="http://localhost:8080/Charity" target="_blank">
        Login
      </a>
    </div>
    <div className="elink">
      <form className="example" action="/action_page.php">
        <input type="text" placeholder="Search.." name="search2" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
    <img src="https://raw.githubusercontent.com/bethel-school-of-technology/community-builders-frontend/roxine1/builders.png" />
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
