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
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          <input className="form-control mr-sm-2 ib" type="search" placeholder="Search" aria-label="Search"/>
        </form>
          
              
        </nav>
    );
}
 
export default NavigationBar;