import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./navBar/NavigationBar";
import Routes from "./shared/Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
