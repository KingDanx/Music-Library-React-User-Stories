import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./MusicTable.css";

const MusicTable = ({songs}) => {
    return ( 
        <div className="top-margin">
            <h1>Library</h1>
            <ul>
                {songs.map((songs, index) => <li className="btn-primary btn" key={index}>{songs.title} - {songs.artist}</li>)}
            </ul>
        </div>
     );
}
 
export default MusicTable;