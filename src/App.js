import React, {useState} from "react";
import {
  BrowserRouter as Router,
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
import './App.css';

export default function App() {
    
  return (
    <Router>
      <Header/>
      <div className="ui borderless menu">
  <a className="item"><Link to="/"><img className="logo" src="https://lh3.googleusercontent.com/HXP4Nmas-z2i7NhtK6dPDbOxiTiaKdVpUkoAsYdDl_Dd6CNIMTa7lVCtugT66ZC-jC_yleECUeqFki62IBKCaFiJQ5MhEJCtjCz9lpp5v8-Z_bksVucZrsSauZPCWtmeCTZqsAHKmvAVQ36tuntJPN27kmF3Ta6XIxP6YT6I9NrbEAu7O0VPQ44O8cv1EFNnNcvuTiIfbGpoeYJJs9pddH433atJHRjR-ECa8i1yqsNwo0PncYp_jrwxgERN33RgGM0SN8vVMnSdOOZeVnyvHMVmnxkY7YYVIyjXDiAk1mdslkVyQHpKBT6os4bXUJ88zig6o0GAYLA_EK8YZsjSwgUevLuor0syvjezNnbH3Tpu1YXhhEMJZ2ItcgkFGIsxZe2OytqZeqAE5KaDr_HepVNhYjoWrd_BIC-TyHfEDqatu-8af6jNOd8MegtUSprVM8VpSn1O3JAyXMAoQYlyZSG6fUQB89IWZTsvPEvOqf-kWjkW6LR86mW1GaRRN2_zEzLSTXSbf-JKvR-DKAzCtxCya7q3K2H3ZHu7EalRVLb3nnQK16Q6RIWJjYDqistq_1AmHJd6odkzjfZrJY1yfvhKHZ9bQLYanVc44OZL-d4BifjZnNoyg-mdJNTbuFAAOiFEmlib27c_Yc8h_ftSMqfaa7a7eJ4xoOG1CxN88vMgdJoHs51nP-xpqpjXHm4a8hDlpF_I8bHxBbZvbn-gSS2xKXOZzM30-VEqyRc1BrpBtfyj=w661-h129-no" alt="Cosmoplitan Logo" width="150" height="30"/></Link></a>
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
  return <h2>Style</h2>;
}

function CO2(){
  return <CO2Emission />;
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

function Dummy(){
  return <DummyArticle/>
}