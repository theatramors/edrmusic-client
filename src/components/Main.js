import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {routes} from "../config/routes";

export default class Main extends Component {
  render() {
    return (
      <Switch>
        {
          routes.map((value, index) => {
            const Component = value.component;
            return (
              <Route
                key={index}
                path={value.path}
                exact={value.exact}
                render={props => <Component {...props} {...this.props}/>}
              />
            );
          })
        }
      </Switch>
    );
  }
}
