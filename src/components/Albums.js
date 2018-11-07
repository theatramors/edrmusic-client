import React from "react";
import {Route, Switch} from "react-router-dom";
import AlbumDetails from "./Albums/AlbumDetails";
import AlbumsList from "./Albums/AlbumsList";

class Albums extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={"/albums"} component={AlbumsList}/>
        <Route exact path={"/albums/:id"} component={AlbumDetails}/>
      </Switch>
    );
  }
}

export default Albums;
