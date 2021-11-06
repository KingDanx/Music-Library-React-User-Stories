import React, { Component } from 'react';
import "./components/MusicTable/MusicTable";
import "./components/NavigationBar/NavigationBar";
import "./components//SearchBar/SearchBar";
import NavigationBar from './components/NavigationBar/NavigationBar';
import axios from 'axios';
import MusicTable from './components/MusicTable/MusicTable';
import "./App.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs: []
     }
  }

  componentDidMount(){
    this.getAllSongs();
  }

  async getAllSongs(){
    let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
    console.log(response.data);
    this.setState({
      songs: response.data
    });
  }

  render() { 
    return ( 
      <div>
        <NavigationBar />
        <div className="App-grid">
          <MusicTable songs={this.state.songs}/>
          <div className="App-middle-fr">
            <div className="App-album-circle">
              <p className="App-song-name">Song Title</p>
              <p>Artist</p>
              <div className="App-little-circle"></div>
              <p>Album</p>
              <p>Genre</p>
            </div>
            <div className="App-controls">
              <div></div>
              <button className="App-buttons"><div className="arrow-right"></div></button>
              <div></div>
            </div>
          </div>
            
        </div>
        
      </div>
     );
  }
}
 
export default App;