import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ArtistsList from "./ArtistsList";
import Artist from "./Artist";

export default class Artists extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={"/artists"} component={ArtistsList}/>
        <Route exact path={"/artists/:id"} component={Artist}/>
      </Switch>
    );
  }
}
