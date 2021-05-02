import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "normalize.css";
import "./index.css";

import configureStore from "./redux/store";

import App from "./components/App";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
