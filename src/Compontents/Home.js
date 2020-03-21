import NavBar from "../Layout/NavBar";
import React from "react";

const Home = () => (
  <div>
    <NavBar />
    <div class="container-fluid text-center">
      <div class="row content">
        <div class="col-sm-8 text-left">
          <div class="hero-image">
            <img
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt="connection"
              class="responsive"
            />
            <div class="hero-text">
              <h1>Welcome to Community Builders!</h1>
              <p>
                Join us as we partner with outreach programs around the world to
                deliver helping hands where they are needed most. Sign up as a
                charity to post your events and start building your community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
