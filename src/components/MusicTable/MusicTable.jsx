import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./MusicTable.css";

const MusicTable = ({songs, getASongHandler}) => {
    return ( 
        <div className="top-margin">
            <h1>Library</h1>
            <ul>
                {songs.map((songs, index) => <li onClick={()=>getASongHandler(songs.id)} className="btn-primary btn" key={index}>{songs.title} - {songs.artist}</li>)}
            </ul>
        </div>
     );
}
 
export default MusicTable;