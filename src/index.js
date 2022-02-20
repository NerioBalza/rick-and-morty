import React from "react";
import ReactDOM from "react-dom";
// Redux
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./redux/reducers";
// App
import App from "./app/App";
// Styles
import "./styles/Index.scss";

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
