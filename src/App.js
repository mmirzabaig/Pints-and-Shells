import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Navbar />
      </div>
    );
  }
}

export default App;
