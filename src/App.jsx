import React, { Component } from "react";
import "./components/MusicTable/MusicTable";
import "./components/NavigationBar/NavigationBar";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import axios from "axios";
import MusicTable from "./components/MusicTable/MusicTable";
import "./App.css";
import MusicControls from "./components/MusicControls/MusicControls";
import AlbumCover from "./components/AlbumCover/AlbumCover";
import SearchBox from "./components/SearchBox/SearchBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.getASong = this.getASong.bind(this);
    this.deleteASong = this.deleteASong.bind(this);
    this.state = {
      songs: [],
      currentSong: {
        title: "Title",
        album: "Album",
        artist: "Artist",
        genre: "Genre",
        releaseDate: "Release Date",
      },
      userInput:""
    };
  }

  componentDidMount() {
    this.getAllSongs();
  }

  async getAllSongs() {
    let response = await axios.get(
      "http://localhost:5000/api/songs"
    );
    console.log(response.data);
    this.setState({
      songs: response.data,
    });
  }
  
  async getASong(id) {
    let response = await axios.get(
      `http://localhost:5000/api/songs/${id}`
    );
    console.log(response.data);
    this.setState({
      currentSong: response.data,
    });
  }
  
  async editASong(id) {
    let response = await axios.put(
      `http://localhost:5000/api/songs/${id}`
    );
    console.log(response.data);
    this.setState({
      currentSong: response.data,
    });
  }

  async deleteASong() {
    let response = await axios.delete(
      `http://localhost:5000/api/songs/${this.state.currentSong.id}`
    );
    console.log(response.data);
    if((this.state.currentSong.id - 2)  < 0){
      this.setState({
        songs: response.data,
        currentSong: this.state.songs[1]
      })
    }
    else{
      this.setState({
        songs: response.data,
        currentSong: this.state.songs[this.state.currentSong.id - 2]
      });
    }
    
    
  }

  async createASong() {
    let response = await axios.post(
      "http://localhost:5000/api/songs"
    );
    console.log(response.data);
    this.setState({
      songs: response.data,
    });
  }

  goToNextTrack = () => {
    let tempTrackNumber = this.state.currentSong.id - 1;
    tempTrackNumber++;
    if (tempTrackNumber === this.state.songs.length) {
      tempTrackNumber = 0;
    }

    this.setState({
      currentSong: this.state.songs[tempTrackNumber],
    });
  };

  goToPreviousTrack = () => {
    let tempTrackNumber = this.state.currentSong.id -1;
    tempTrackNumber--;
    if (tempTrackNumber < 0) {
      tempTrackNumber = this.state.songs.length - 1;
    }
    this.setState({
      currentSong: this.state.songs[tempTrackNumber],
    });
  };

  handleChange = (event) => {
    console.log(event);
    this.setState({
      userInput : event.target.value,
    });
  };


  render() {
    return (
      <div>
        <NavigationBar songs={this.state.songs} handleChange={this.handleChange} songFilter={this.songFilter} userInput={this.state.userInput}/>
        <div className="App-grid">
          <MusicTable songs={this.state.songs} getASong={this.getASong}/>
          <div className="App-middle-fr">
            <AlbumCover currentSong={this.state.currentSong} deleteASong={this.deleteASong}/>
            <MusicControls
              goToNextTrack={this.goToNextTrack}
              goToPreviousTrack={this.goToPreviousTrack}
            />
          </div>
          <SearchBox userInput={this.state.userInput} songs={this.state.songs} getASong={this.getASong}/>
        </div>
      </div>
    );
  }
}

export default App;
