import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import "./index.scss";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </div>
  );
};

export default App;
