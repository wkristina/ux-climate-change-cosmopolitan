import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Articles from './components/Articles.js';

class App  extends Component {
  state = {  }
  render() { 
    return (
      <div className= "App">
        <Header/>
        <Articles/>
      </div>
      );
  }
}
 
export default App;
