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
            el.title.includes(props.userInput) ||
            el.album.includes(props.userInput) ||
            el.artist.includes(props.userInput) ||
            el.genre.includes(props.userInput) ||
            el.releaseDate.includes(props.userInput) ? (
              <li className="search-box btn btn-primary btn:hover" key={index}>{el.title} - {el.artist}</li>
            ) : null
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
