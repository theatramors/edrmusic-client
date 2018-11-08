import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import ArtistDetails from "./Artists/ArtistDetails";
import ArtistsList from "./Artists/ArtistsList";

class Artists extends Component {
  render() {
    console.log("Artists props", this.props);
    return (
      <Switch>
        <Route exact path={"/artists"} render={(props) => <ArtistsList {...props} {...this.props}/>}/>
        <Route exact path={"/artists/:id"} component={ArtistDetails}/>
      </Switch>
    );
  }
}

export default Artists;
