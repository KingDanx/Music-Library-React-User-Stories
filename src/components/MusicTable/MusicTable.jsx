import React from "react";

const MusicTable = ({songs}) => {
    return ( 
        <div>
            <ul>
                {songs.map((songs, index) => <li key={index}>{songs.title}</li>)}
            </ul>
        </div>
     );
}
 
export default MusicTable;