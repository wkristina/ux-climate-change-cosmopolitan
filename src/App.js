import React, { Component}  from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Articles from './components/Articles';
import CO2Emission from './components/CO2Emission';
import Temperature from './components/Temperature';
import GlacierSize from './components/GlacierSize';
import SeaLevel from './components/SeaLevel';
import DummyArticle from './components/DummyArticle';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

class App extends Component {
  state={
    glacierChange: []
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
          <Route path="/article">
            <DummyArticle />
          </Route>
          <Route path="/beauty">
            <DummyArticle />
          </Route>
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
            <Articles />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}
}
export default App;
