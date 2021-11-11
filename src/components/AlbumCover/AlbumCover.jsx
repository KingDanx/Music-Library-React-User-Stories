import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../../src/App.css";

const AlbumCover = ({currentSong}) => {
    return ( 
        <div>
            <div className="App-album-circle">
                <div>
                    <p className="App-song-name">{currentSong.title}</p>
                    <p>{currentSong.artist}</p>
                </div>
                
                <div className="App-album-middle">
                    <div>-</div>
                    <div className="App-little-circle"></div>
                    <div>+</div>
                </div>
                
                
                <div>
                    <p>{currentSong.album}</p>
                    <p>{currentSong.genre}</p>
                    <p>{currentSong.releaseDate}</p>
                </div>
                
            </div>
        </div>
     );
}
 
export default AlbumCover;