import { applyMiddleware, createStore, compose } from "redux";
import root_reducer from "./root_reducer";

import logger from "redux-logger";
import thunk from "redux-thunk";

const middleWare = [thunk];

if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleWare),
  // other store enhancers if any
);
const store = createStore(root_reducer, enhancer);

export default store;
