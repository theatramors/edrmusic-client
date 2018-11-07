import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import ArtistDetails from "./Artists/ArtistDetails";
import ArtistsList from "./Artists/ArtistsList";

class Artists extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={"/artists"} component={ArtistsList}/>
        <Route exact path={"/artists/:id"} component={ArtistDetails}/>
      </Switch>
    );
  }
}

export default Artists;
