import React from "react";
import {Route, Switch} from "react-router-dom";
import AlbumDetails from "./Albums/AlbumDetails";
import AlbumsList from "./Albums/AlbumsList";

class Albums extends React.Component {
  render() {
    console.log("Albums props", this.props);
    return (
      <Switch>
        <Route exact path={"/albums"} render={(props) => <AlbumsList {...props} {...this.props}/>}/>
        <Route exact path={"/albums/:id"} component={AlbumDetails}/>
      </Switch>
    );
  }
}

export default Albums;
