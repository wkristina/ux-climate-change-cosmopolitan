import React from "react";
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

export default function App() {
  function componentDidMount() {
    document.title = "Cosmopolitan - Climate Change";
  }
  componentDidMount();
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
            <Temperature />
          </Route>
          <Route path="/nature">
            <GlacierSize/>
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

