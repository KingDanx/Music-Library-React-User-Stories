import React, { Component } from 'react';
import "./App.css";
import "./components/MusicTable/MusicTable";
import "./components/NavigationBar/NavigationBar";
import "./components//SearchBar/SearchBar";
import NavigationBar from './components/NavigationBar/NavigationBar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <NavigationBar />
      </div>
     );
  }
}
 
export default App;