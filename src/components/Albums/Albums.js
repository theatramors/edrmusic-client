import React from "react";
import { Route, Switch } from "react-router-dom";
import AlbumsList from "./AlbumsList";
import Album from "./Album";

export default class Albums extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={"/albums"} component={AlbumsList}/>
        <Route exact path={"/albums/:id"} component={Album}/>
      </Switch>
    );
  }
}
