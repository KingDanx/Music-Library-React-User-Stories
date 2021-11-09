import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../../src/App.css";

const AlbumCover = ({currentSong}) => {
    return ( 
        <div>
            <div className="App-album-circle">
                <p className="App-song-name">{currentSong.title}</p>
                <p>{currentSong.artist}</p>
                <div className="App-little-circle"></div>
                <p>{currentSong.album}</p>
                <p>{currentSong.genre}</p>
            </div>
        </div>
     );
}
 
export default AlbumCover;