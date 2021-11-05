import React from "react";

const SearchBar = () => {
    return ( 
        <div>
            <form className="form-inline my-2 my-lg-0">
              <div className="dropdown ib">
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
        </div>
     );
}
 
export default SearchBar;