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
    this.state = {
      songs: [],
      trackNumber: 0,
      currentSong: {
        id: 1,
        title: "Drive My Car",
        album: "Rubber Soul",
        artist: "The Beatles",
        genre: "Folk Rock",
        releaseDate: "12/03/1965",
      },
    };
    this.songs = [this.state.songs];
  }

  componentDidMount() {
    this.getAllSongs();
  }

  async getAllSongs() {
    let response = await axios.get(
      "http://www.devcodecampmusiclibrary.com/api/music"
    );
    console.log(response.data);
    this.setState({
      songs: response.data,
    });
  }

  goToNextTrack = () => {
    let tempTrackNumber = this.state.trackNumber;
    tempTrackNumber++;
    if (tempTrackNumber === this.state.songs.length) {
      tempTrackNumber = 0;
    }

    this.setState({
      trackNumber: tempTrackNumber,
      currentSong: this.state.songs[tempTrackNumber],
    });
  };

  goToPreviousTrack = () => {
    let tempTrackNumber = this.state.trackNumber;
    tempTrackNumber--;
    if (tempTrackNumber < 0) {
      tempTrackNumber = this.state.songs.length - 1;
    }
    this.setState({
      trackNumber: tempTrackNumber,
      currentSong: this.state.songs[tempTrackNumber],
    });
  };

  handleChange = (event) => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <NavigationBar songs={this.state.songs} />
        <div className="App-grid">
          <MusicTable songs={this.state.songs} />
          <div className="App-middle-fr">
            <AlbumCover currentSong={this.state.currentSong} />
            <MusicControls
              goToNextTrack={this.goToNextTrack}
              goToPreviousTrack={this.goToPreviousTrack}
              handleChange={this.handleChange}
            />
          </div>
          <SearchBox />
        </div>
      </div>
    );
  }
}

export default App;
