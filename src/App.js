import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const imgUrl = `./logo.svg`;
    return (
      <div className="App">
        <div className="App-header">
          <img src={imgUrl} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
