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
import Celebs from './components/Celebs.js';
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
  <a className="item"><Link to="/ux-climate-change-cosmopolitan"><img className="logo" src="https://lh3.googleusercontent.com/HXP4Nmas-z2i7NhtK6dPDbOxiTiaKdVpUkoAsYdDl_Dd6CNIMTa7lVCtugT66ZC-jC_yleECUeqFki62IBKCaFiJQ5MhEJCtjCz9lpp5v8-Z_bksVucZrsSauZPCWtmeCTZqsAHKmvAVQ36tuntJPN27kmF3Ta6XIxP6YT6I9NrbEAu7O0VPQ44O8cv1EFNnNcvuTiIfbGpoeYJJs9pddH433atJHRjR-ECa8i1yqsNwo0PncYp_jrwxgERN33RgGM0SN8vVMnSdOOZeVnyvHMVmnxkY7YYVIyjXDiAk1mdslkVyQHpKBT6os4bXUJ88zig6o0GAYLA_EK8YZsjSwgUevLuor0syvjezNnbH3Tpu1YXhhEMJZ2ItcgkFGIsxZe2OytqZeqAE5KaDr_HepVNhYjoWrd_BIC-TyHfEDqatu-8af6jNOd8MegtUSprVM8VpSn1O3JAyXMAoQYlyZSG6fUQB89IWZTsvPEvOqf-kWjkW6LR86mW1GaRRN2_zEzLSTXSbf-JKvR-DKAzCtxCya7q3K2H3ZHu7EalRVLb3nnQK16Q6RIWJjYDqistq_1AmHJd6odkzjfZrJY1yfvhKHZ9bQLYanVc44OZL-d4BifjZnNoyg-mdJNTbuFAAOiFEmlib27c_Yc8h_ftSMqfaa7a7eJ4xoOG1CxN88vMgdJoHs51nP-xpqpjXHm4a8hDlpF_I8bHxBbZvbn-gSS2xKXOZzM30-VEqyRc1BrpBtfyj=w661-h129-no" alt="Cosmoplitan Logo" width="150" height="30"/></Link></a>
  <a className="item"><Link to="/ux-climate-change-cosmopolitan/style">style</Link></a>
  <a className="item"><Link to="/ux-climate-change-cosmopolitan/celeb">celebrities</Link> </a>
  <a className="item"><Link to="/ux-climate-change-cosmopolitan/beauty">beauty</Link></a>
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
        <Link to="/ux-climate-change-cosmopolitan/co2">CO2 Emission</Link>
      </div>
      <div
        style={{pointerEvents:'all'}}
        role="option"
        aria-checked="false"
        aria-selected="false"
        class="item"
      >
        <Link to="/ux-climate-change-cosmopolitan/temp">temperature</Link>
      </div>
      <div
        style={{pointerEvents:'all'}}
        role="option"
        aria-checked="false"
        aria-selected="false"
        class="item"
      >
        <Link to="/ux-climate-change-cosmopolitan/glacier">glacier size</Link>
      </div>
      <div
        style={{pointerEvents:'all'}}
        role="option"
        aria-checked="false"
        aria-selected="false"
        class="item"
      >
        <Link to="/ux-climate-change-cosmopolitan/sea">sea level</Link>
      </div>
    </div>
  </div>
</a>
</div>
      <div>
        <Switch>
        {/* IMPORTANT! path= / ALWAYS has to be at the bottom (copy more links on top*/}
          <Route path="/ux-climate-change-cosmopolitan/article">
            <Dummy />
          </Route>
          <Route path="/ux-climate-change-cosmopolitan/sea">
            <Sea />
          </Route>
          <Route path="/ux-climate-change-cosmopolitan/glacier">
            <Glacier />
          </Route>
          <Route path="/ux-climate-change-cosmopolitan/temp">
            <Temp />
          </Route>
          <Route path="/ux-climate-change-cosmopolitan/beauty">
            <Beauty />
          </Route>
          <Route path="/ux-climate-change-cosmopolitan/celeb">
            <Celebrities />
          </Route>
        <Route path="/ux-climate-change-cosmopolitan/co2">
            <CO2 />
          </Route>
          <Route path="/ux-climate-change-cosmopolitan/style">
            <Style />
          </Route>
          <Route path="/(ux-climate-change-cosmopolitan|)">
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
  return <DummyArticle/>;
}

function CO2(){
  return <CO2Emission />;
}

function Celebrities(){
  return <Celebs/>;
};

function Beauty(){
  return <DummyArticle/>;
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