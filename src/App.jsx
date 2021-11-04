import React, { Component } from 'react';
import "./App.css";
import "./components/MusicTable/MusicTable";
import "./components/NavigationBar/NavigationBar";
import "./components//SearchBar/SearchBar";
import NavigationBar from './components/NavigationBar/NavigationBar';
import axios from 'axios';
import MusicTable from './components/MusicTable/MusicTable';


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
        <MusicTable songs={this.state.songs}/>
      </div>
     );
  }
}
 
export default App;