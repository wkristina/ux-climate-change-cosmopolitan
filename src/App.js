import React from "react";
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

export default function App() {
  return (
    <Router>
      <Header/>
      <div className="ui borderless menu">
  <a className="active item"><Link to="/">Cosmopolitan</Link></a>
  <a className="item"><Link to="/style">style</Link></a>
  <a className="item">celebrities</a>
  <a className="item">beauty</a>
  <a className="item">facts</a>
</div>
      <div>
        <Switch>
          <Route path="/style">
            <Style />
          </Route>
          <Route path="/topics">
            <Topics />
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

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}