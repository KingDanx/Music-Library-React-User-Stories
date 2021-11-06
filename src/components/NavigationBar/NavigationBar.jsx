import React from "react";
import logo from "../../images/dcc-logo.png";
import "bootstrap/dist/css/bootstrap.css";
import "./NavigationBar.css";

const NavigationBar = () => {
    return ( 
        <nav className="navbar outline navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="https://devcodecamp.com/" target="_blank">
                <img src={logo} width="30" height="30" className="d-inline-block align-top logo" alt="devCodeCamp logo"/>
              </a>  
              <span className="span-flex">dCC Music</span>
        <form className="form-inline my-2 my-lg-0 display-flex">
          <div className="dropdown">
            <div>
              <select className="search-select">
                <option value="0">Search Type</option>
                <option value="1">Title</option>
                <option value="2">Artist</option>
                <option value="3">Album</option>
                <option value="4">Genre</option>
              </select>
            </div>
          </div>
          <input className="form-control mr-sm-2 ib" type="search" placeholder="Search" aria-label="Search"/>
        </form>
          
              
        </nav>
    );
}
 
export default NavigationBar;