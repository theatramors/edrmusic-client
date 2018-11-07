import React from "react";
import {Route, Switch} from "react-router-dom";
import ProfileDetails from "./Profile/ProfileDetails";

class Profile extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={"/users/:username"} component={ProfileDetails}/>
      </Switch>
    );
  }
}

export default Profile;
