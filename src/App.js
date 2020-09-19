import React from "react";
import { Switch, Route } from "react-router-dom";
import "./index.scss";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </div>
  );
}

export default App;
