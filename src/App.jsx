import React, { Component } from 'react';
import "./components/MusicTable/MusicTable";
import "./components/NavigationBar/NavigationBar";
import "./components//SearchBar/SearchBar";
import NavigationBar from './components/NavigationBar/NavigationBar';
import axios from 'axios';
import MusicTable from './components/MusicTable/MusicTable';
import "./App.css";
import MusicControls from './components/MusicControls/MusicControls';
import AlbumCover from './components/AlbumCover/AlbumCover';



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
            <AlbumCover/>
            <MusicControls/>
          </div>
        </div>
      </div>
     );
  }
}
 
export default App;