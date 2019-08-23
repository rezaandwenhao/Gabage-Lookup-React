import React, { Component } from 'react';
import SearchSec from './components/SearchSec';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>      
        <div className="App">
          <header className="App-header">
            <h1 style={{ color: 'white', fontSize: 37 }}>Toronto Waste Lookup</h1>
          </header>
          <SearchSec />
        </div>
      </Provider>
    );
  }
}

export default App;
