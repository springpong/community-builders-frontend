import React, {Component} from "react";
import {Link} from "react-router-dom";


export default class NavBar extends Component {


  render() {
  return(
    <div>
        <Link to="/">Home</Link>
        <img id="NavLogo" src="https://raw.githubusercontent.com/bethel-school-of-technology/community-builders-frontend/roxine1/builders.png"/>
        <hr/>
    </div>
  );
}}