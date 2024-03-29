import React, { Component } from 'react';
import logo from "../../images/dcc-logo.png";
import "bootstrap/dist/css/bootstrap.css";
import "./NavigationBar.css";

const NavigationBar = (props) => {
  return ( 
    <nav className="navbar outline navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="https://devcodecamp.com/" target="_blank">
      <img src={logo} width="30" height="30" className="d-inline-block align-top logo" alt="devCodeCamp logo"/>
    </a>  
    <span className="span-flex">dCC Music</span>
    <form className="form-inline my-2 my-lg-0 display-flex">
    <div></div>
  
  <input name="search" value={props.userInput} onChange={props.handleChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
</form>   
</nav>
   );
}
 
export default NavigationBar;