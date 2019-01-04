import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";

const composeEnc =
  window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnc(applyMiddleware(reduxThunk)));

export default props => {
  return <Provider store={store}>{props.children}</Provider>;
};
