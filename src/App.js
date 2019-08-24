import React, { Component } from 'react';
import SearchSec from './components/SearchSec';
import Footer from './components/Footer'
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
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
