import React, { Component } from 'react';
import SearchSec from './Components/SearchSec';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{color: 'white', fontSize: 37}}>Toronto Waste Lookup</h1>
        </header>
        <SearchSec />
      </div>
    );
  }
}

export default App;
