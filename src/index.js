import React from "react";
import ReactDOM from "react-dom";
// import {BrowserRouter as Router} from 'react-router-dom';
import { ConnectedRouter as ConnectedRouterProvider } from "connected-react-router";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { history } from "./routes/history";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouterProvider history={history}>
      <App />
    </ConnectedRouterProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
