import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './containers/gallery';
import SearchBar from './containers/search_bar';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Gallery />
      </div>
    );
  }
}

export default App;
