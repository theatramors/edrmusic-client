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
    console.log("Main props", this.props);
    return (
      <Switch>
        <Route exact path={"/"} render={(props) => <Home {...props} {...this.props}/>}/>
        <Route exact path={"/tracks"} render={(props) => <Songs {...props} {...this.props}/>}/>
        <Route path={"/artists"} render={(props) => <Artists {...props} {...this.props}/>}/>
        <Route path={"/albums"} render={(props) => <Albums {...props} {...this.props}/>}/>
        <Route path={"/users"} component={Profile}/>
        <Route component={PageNotFound}/>
      </Switch>
    );
  }
}

export default Main;
