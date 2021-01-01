import React from "react";
import { Switch, Route } from "react-router-dom";
import CartList from "../cart/CartList";
import DetailView from "../detailView/DetailView";
import Home from "../home/Home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={DetailView} />
      <Route exact path="/cart" component={CartList} />
    </Switch>
  );
}
