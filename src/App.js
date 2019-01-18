import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
// CssBase use default css settings by Material UI
import CssBaseline from '@material-ui/core/CssBaseline'
import MainComponent from './MainComponent';
//

class App extends Component {
  render() {
    
    // to check if components refresh when they dont need to
    if (process.env.NODE_ENV !== 'production') {
      const {whyDidYouUpdate} = require('why-did-you-update');
      whyDidYouUpdate(React);
    }
    return (
      <div className="App">
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainComponent}/>
        </Switch>
      </div>
    );
  }
}

export default App;
