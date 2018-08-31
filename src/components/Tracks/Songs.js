import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SongList from "./SongList";
// import Artist from "./Artist";

export default class Artists extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={ "/tracks" } component={ SongList } />
        { /*<Route exact path={"/artists/:id"} component={Artist}/>*/ }
      </Switch>
    );
  }
}