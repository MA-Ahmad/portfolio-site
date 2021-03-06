import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Header from "../shared/Header";
import Home from "./Home";
import Gallery from "./Gallery";
import Pricing from "./Pricing";
import UserDetail from "./UserDetail";
import Users from "./Users";

const Main = () => {
  //   let location = useLocation();
  //   console.log(location);

  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/users/:id" component={UserDetail} />
        <Route exact path="/users" component={Users} />
        <Redirect to="/home" />
      </Switch>
    </React.Fragment>
  );
};

export default Main;
