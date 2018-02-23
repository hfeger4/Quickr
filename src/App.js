import React, { Component } from 'react';
import './App.css';
import Gallery from './containers/gallery';
import SearchBar from './containers/search_bar';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <Gallery />
      </div>
    );
  }
}

export default App;
