import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter as ConnectedRouterProvider } from "connected-react-router";
import * as serviceWorker from "./serviceWorker";

import store from "./redux/store";
import { history } from "./routes/history";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouterProvider history={history}>
      <App />
    </ConnectedRouterProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
