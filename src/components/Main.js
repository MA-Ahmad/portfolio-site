import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../shared/Header";
import Home from "./Home";
import Gallery from "./Gallery";

const Main = props => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Redirect to="/home" />
      </Switch>
    </React.Fragment>
  );
};

export default Main;
