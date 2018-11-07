import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Albums from "./Albums";
import Artists from "./Artists";
import Home from "./Main/Home";
import PageNotFound from "./PageNotFound";
import Profile from "./Profile";
import Songs from "./Songs";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/tracks"} component={Songs}/>
        <Route exact path={"/artists"} component={Artists}/>
        <Route exact path={"/albums"} component={Albums}/>
        <Route exact path={"/users"} component={Profile}/>
        <Route component={PageNotFound}/>
      </Switch>
    );
  }
}

export default Main;
