import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import SongsList from "./Songs/SongsList";

class Songs extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={"/tracks"} component={SongsList}/>
      </Switch>
    );
  }
}

export default Songs;
