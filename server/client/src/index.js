import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";
const root = createRoot(document.querySelector("#root"));

const store = legacy_createStore(reducers, {}, applyMiddleware(reduxThunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
