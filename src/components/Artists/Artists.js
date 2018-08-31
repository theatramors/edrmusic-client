import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Artist from "./Artist";
import ArtistsList from "./ArtistsList";

export default class Artists extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={ "/artists" } component={ ArtistsList } />
        <Route exact path={ "/artists/:id" } component={ Artist } />
      </Switch>
    );
  }
}
