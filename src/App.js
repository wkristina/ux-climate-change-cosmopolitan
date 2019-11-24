import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Header from './components/Header.js';
import Articles from './components/Articles.js';
import CO2Emission from './components/CO2Emission.js';
import Temperature from './components/Temperature.js';
import GlacierSize from './components/GlacierSize.js';
import SeaLevel from './components/SeaLevel.js';
import './App.css';

export default function App() {
    
  return (
    <Router>
      <Header/>
      <div className="ui borderless menu">
  <a className="item"><Link to="/">Cosmopolitan</Link></a>
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
  return <h2>Style</h2>;
}

function CO2(){
  return <CO2Emission/>;
}

function Celebrities(){
  return <h2>Celebs</h2>;
};

function Beauty(){
  return <h2>Beauty</h2>;
};

function Temp(){
  return <Temperature/>
}

function Glacier(){
  return <GlacierSize/>
}

function Sea(){
  return <SeaLevel/>
}