import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./rootReducer";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
