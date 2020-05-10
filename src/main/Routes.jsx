import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "../components/home/Home";
import Pokedex from "../components/pokedex/Pokedex";

export default props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/pokedex" component={Pokedex} />
    <Redirect from="*" to="/" />
  </Switch>
);
