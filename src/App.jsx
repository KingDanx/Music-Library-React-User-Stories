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
    this.deleteASong = this.deleteASong.bind(this);
    this.createASong = this.createASong.bind(this);
    this.editASong = this.editASong.bind(this);
    this.getASong = this.getASong.bind(this);
    this.state = {
      songs: [],
      currentSong: {
        title: "Title",
        album: "Album",
        artist: "Artist",
        genre: "Genre",
        releaseDate: "Release Date",
      },
      userInput:"",
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

  async createASong(song) {
    let response = await axios.post(
      "http://localhost:5000/api/songs", song
    );
    console.log(response.data);
    this.setState({
      currentSong: response.data,
    });
    this.getAllSongs();
  }

  async editASong(id, song) {
    let response = await axios.put(
      `http://localhost:5000/api/songs/${id}`, song
    );
    console.log(response.data);
    this.setState({
      currentSong: response.data,
    });
    this.getAllSongs();
  }

  async deleteASong() {
    if(this.state.currentSong.artist === "Artist" && this.state.currentSong.releaseDate === "Release Date"){
      alert("Please select a song.");
      return;
    }
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
            <AlbumCover deleteASong={this.deleteASong} createASong={this.createASong} currentSong={this.state.currentSong} editASong={this.editASong}/>
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
