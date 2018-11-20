import "bootstrap/dist/css/bootstrap.css";
import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Container} from "reactstrap";
import * as actions from "./actions";
import Header from "./components/Header";
import {routes} from "./config/routes";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container fluid className={"text-dark"} style={{width: "1000px", height: "100vh"}}>
          <Header/>
          <Switch>
            {
              routes.map((value, index) => {
                const Component = value.component;
                return (
                  <Route
                    key={index}
                    path={value.path}
                    exact={value.exact}
                    render={props => <Component {...props} {...this.props} actions={actions.default}/>}
                  />
                );
              })
            }
          </Switch>
          <ToastContainer/>
        </Container>
      </BrowserRouter>
    );
  }
}
