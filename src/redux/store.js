import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import { logger } from "redux-logger";

import { history } from "../routes/history";
import rootReducer from "../redux/reducers/index";

const connRouterMiddleware = routerMiddleware(history);
const middleware = [reduxThunk, connRouterMiddleware];

if (process.env.NODE_ENV === "development") middleware.push(logger);

const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
