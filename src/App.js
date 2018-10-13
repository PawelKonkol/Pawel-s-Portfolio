import React, { Component } from 'react';
import './App.css';
import pawelslogo from './pk.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={pawelslogo} height={96}></img>
      </div>
    );
  }
}

export default App;
