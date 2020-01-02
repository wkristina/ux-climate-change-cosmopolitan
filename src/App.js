import React, { Component}  from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import HomePage from './components/HomePage';
import CO2Emission from './components/CO2Emission';
import GlacierSize from './components/GlacierSize';
import SeaLevel from './components/SeaLevel';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
class App extends Component {
  state={
    glacierChange: [],
    seaLevelChange: []
  }

 async componentDidMount() {
    document.title = "Cosmopolitan - Climate Change";
  }

  render() { 
  return (
    <div>
    <Router>
    <ScrollToTop/>
    <Header/>
    <NavBar/>
      <div>
        <Switch>
        {/* IMPORTANT! path= / ALWAYS has to be at the bottom (copy more links on top*/}
          <Route path="/nature">
            <GlacierSize />
          </Route>
          <Route path="/celeb">
            <CO2Emission />
          </Route>
          <Route path="/style">
            <SeaLevel />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}
}
export default App;
