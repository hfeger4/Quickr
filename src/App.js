import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './components/gallery.js';

class App extends Component {
  render() {
    return (
      <div>
        <Gallery />
      </div>
    );
  }
}

export default App;
