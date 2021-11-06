import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../../src/App.css";

const MusicControls = () => {
    return ( 
        <div>
            <div className="App-controls">
              <button className="App-buttons">
                <div className="fast-forward-grid"><div className="rr-tri"></div><div className="rr-tri"></div></div>
              </button>
              <button className="App-buttons">
                <div className="arrow-right"></div>
              </button>
              <button className="App-buttons">
                <div className="fast-forward-grid"><div className="fast-forward-tri"></div><div className="fast-forward-tri"></div></div>
              </button>
            </div>
        </div>
     );
}
 
export default MusicControls;