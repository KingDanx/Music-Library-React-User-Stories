import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./SearchBox.css";

const SearchBox = (props) => {
  return (
    <div>
      {" "}
      {props.userInput === "" ? null : (
        <ul>
          {props.songs.map((el, index) =>
            el.title.toLowerCase().includes(props.userInput.toLowerCase()) ||
            el.album.toLowerCase().includes(props.userInput.toLowerCase()) ||
            el.artist.toLowerCase().includes(props.userInput.toLowerCase()) ||
            el.genre.toLowerCase().includes(props.userInput.toLowerCase()) ||
            el.releaseDate.includes(props.userInput) ? (
              <li onClick={()=>props.getASong(el.id)} className="search-box btn btn-primary btn:hover" key={index}>{el.title} - {el.artist}</li>
            ) : null
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
