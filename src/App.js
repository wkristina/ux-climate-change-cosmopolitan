import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header.js';
import Articles from './components/Articles.js';
import CO2Emission from './components/CO2Emission.js';
import Temperature from './components/Temperature.js';
import GlacierSize from './components/GlacierSize.js';
import SeaLevel from './components/SeaLevel.js';
import DummyArticle from './components/DummyArticle.js';
import Celebs from './components/Celebs.js';
import StyleP from './components/Style.js';
import BeautyP from './components/Beauty.js';
import './App.css';

export default function App() {
  function componentDidMount() {
    document.title = "Cosmopolitan - Climate Change";
  }
  componentDidMount();
  return (
    <Router>
      <Header/>
      <div className="ui borderless menu">
  <a className="item"><Link to="/"><img className="logo" src="https://lh3.googleusercontent.com/mNSm_Jilr096Tx6hbpmk12QHY5eVBIXibYCeaivPUTLJ4hlbEcD9iTsd8nhTcI1giRNMzETIHF1P9CvD0PA0VcLEJmnmRDDOtyYNJSvkipoDWMW1aVh3Sj3RFDnHv-wOhpq1BM4RQ539yQIIz47j8xBk8102FF1BACzTkRiQ2n1AwJ7QdVnG8aR0beQ-ZMYLH7RD9jJU7GIyzkZtiXdTcEGpkwPJwDxVLdiVTkBzjY8gG-rOF3vGgobhU1A8y9tV4FiotyfHaMYmTwvRt_BvXV054mnWrDKX0opPXU9Bfr2b-wCq6bBgVFljqtBSjb3wDVbxdpWM7hE4qxVJQdy-97oaqrgOv1LYDpPa4lVxMT4Wnir6UuJB_3xPB_bAyyAej_CnHnXXBN7FCZD-gR2nuRFNedcLEOglgZJXl2mWyUmFPeZ7GzGKjUy2H4iSxLXWK5Xq2Q5daKo-wmAWJuAGY1wu2rcRCwu7n924LvZsgkB4_SUn684GzzqxxPaNlzSoLBj-pif0Y0eW9trtawp6GGihWjwHMYp8rgFu2wt_piJYdonCwSvtsXM-RYpJOcJPq-LAmCT8UUMp0VRiN1rd4PRyZLk0Qp4ypTKAwI-a92aJzu7-XkbtBRHcu4boiAqEVZRvaVwklxaBiua2fW4ihIdzX69fsjGIhWbW8VasnYLsSTIC22-j_Qts-yXVwYhVqa6U2Y4acilWCAUfUa4_wC7wLXCJrT_RJrwWEwtYZBYXbPJu=w991-h167-no" alt="Cosmoplitan Logo" width="150" height="30"/></Link></a>
  <a className="item"><Link to="/style">style</Link></a>
  <a className="item"><Link to="/celeb">celebrities</Link> </a>
  <a className="item"><Link to="/beauty">beauty</Link></a>
  <a className="item">
  <div role="listbox" aria-expanded="false" class="ui item simple dropdown" tabindex="0">
    <div class="text" role="alert" aria-live="polite" aria-atomic="true">facts</div>
    <i aria-hidden="true" class="dropdown icon"></i>
    <div class="menu transition">
      <div
        style={{pointerEvents:'all'}}
        role="option"
        aria-checked="false"
        aria-selected="false"
        class="item"
      >
        <Link to="/co2">CO2 Emission</Link>
      </div>
      <div
        style={{pointerEvents:'all'}}
        role="option"
        aria-checked="false"
        aria-selected="false"
        class="item"
      >
        <Link to="/temp">temperature</Link>
      </div>
      <div
        style={{pointerEvents:'all'}}
        role="option"
        aria-checked="false"
        aria-selected="false"
        class="item"
      >
        <Link to="/glacier">glacier size</Link>
      </div>
      <div
        style={{pointerEvents:'all'}}
        role="option"
        aria-checked="false"
        aria-selected="false"
        class="item"
      >
        <Link to="/sea">sea level</Link>
      </div>
    </div>
  </div>
</a>
</div>
      <div>
        <Switch>
        {/* IMPORTANT! path= / ALWAYS has to be at the bottom (copy more links on top*/}
          <Route path="/article">
            <Dummy />
          </Route>
          <Route path="/sea">
            <Sea />
          </Route>
          <Route path="/glacier">
            <Glacier />
          </Route>
          <Route path="/temp">
            <Temp />
          </Route>
          <Route path="/beauty">
            <Beauty />
          </Route>
          <Route path="/celeb">
            <Celebrities />
          </Route>
        <Route path="/co2">
            <CO2 />
          </Route>
          <Route path="/style">
            <Style />
          </Route>
          <Route path="/">
            <Cosmopolitan />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Cosmopolitan() {
  return <Articles/>;
}

function Style() {
  return <StyleP/>;
}

function CO2(){
  return <CO2Emission />;
}

function Celebrities(){
  return <Celebs/>;
};

function Beauty(){
  return <BeautyP/>;
};

function Temp(){
  return <DummyArticle/>
}

function Glacier(){
  return <DummyArticle/>
}

function Sea(){
  return <DummyArticle/>
}

function Dummy(){
  return <DummyArticle/>
}