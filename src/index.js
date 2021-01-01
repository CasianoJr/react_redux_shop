import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReduxProvider from "./redux/RootRedux";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
