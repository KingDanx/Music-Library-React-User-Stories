import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../../src/App.css";

const AlbumCover = () => {
    return ( 
        <div>
            <div className="App-album-circle">
                <p className="App-song-name">Song Title</p>
                <p>Artist</p>
                <div className="App-little-circle"></div>
                <p>Album</p>
                <p>Genre</p>
            </div>
        </div>
     );
}
 
export default AlbumCover;