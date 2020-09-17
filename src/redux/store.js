import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from 'redux-logger';

import rootReducer from "../redux/reducers/index";

const middleware = [reduxThunk];

if ( process.env.NODE_ENV === 'development' ) middleware.push(logger);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
