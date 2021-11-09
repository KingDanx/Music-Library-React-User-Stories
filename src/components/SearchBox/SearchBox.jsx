import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./SearchBox.css";

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",
            aritist:"",
            album:"",
            genre:""
         }
    }


    render() { 
        return ( 
        <form className="search-box" onClick={this.handleSubbmit}>
            <h5 className="btn-primary btn">testing 123123123sedrlfkjalsdf</h5>
            <h5 className="btn-primary btn">testing 123123123sedrlfkjalsdf</h5>
            <h5 className="btn-primary btn">testing 123123123sedrlfkjalsdf</h5>
            <h5 className="btn-primary btn">testing 123123123sedrlfkjalsdf</h5>
            <h5 className="btn-primary btn">testing 123123123sedrlfkjalsdf</h5>
            <h5 className="btn-primary btn">testing 123123123sedrlfkjalsdf</h5>
            <h5 className="btn-primary btn">testing 123123123sedrlfkjalsdf</h5>
            <h5 className="btn-primary btn">testing 123123123sedrlfkjalsdf</h5>
            <h5 className="btn-primary btn">testing 123123123sedrlfkjalsdf</h5>
            <h5 className="btn-primary btn">testing 123123123sedrlfkjalsdf</h5>
            <h5 className="btn-primary btn">testing 123123123sedrlfkjalsdf</h5>
        </form>
        );
    }
}
 
export default SearchBox;