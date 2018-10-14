import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";

import Home from "./Home";
import Loading from "./Loading";

const AsyncHistory = importedComponent(
  () => import(/* webpackChunkName:'History' */ "./History"),
  {
    LoadingComponent: Loading
  }
);

const AsyncAlchemy = importedComponent(
  () => import(/* webpackChunkName:'Alchemy' */ "./Alchemy"),
  {
    LoadingComponent: Loading
  }
);
const AsyncPodcast = importedComponent(
  () => import(/* webpackChunkName:'Podcast' */ "./Podcast"),
  {
    LoadingComponent: Loading
  }
);
const AsyncVideo = importedComponent(
  () => import(/* webpackChunkName:'Video' */ "./Video"),
  {
    LoadingComponent: Loading
  }
);
const AsyncTrends = importedComponent(
  () => import(/* webpackChunkName:'Trends' */ "./Trends"),
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/history" component={AsyncHistory} />
        <Route exact path="/alchemy" component={AsyncAlchemy} />
        <Route exact path="/podcast" component={AsyncPodcast} />
        <Route exact path="/video" component={AsyncVideo} />
        <Route exact path="/trends" component={AsyncTrends} />
      </Switch>
    </Router>
  );
};

export default App;
