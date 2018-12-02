import "bootstrap/dist/css/bootstrap.css";
import React, {Component} from "react";
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Container} from "reactstrap";
import * as Albums from "./actions/AlbumsActions"
import * as Artists from "./actions/ArtistsActions"
import * as Home from "./actions/HomeActions"
import * as Songs from "./actions/SongsActions"
import Header from "./components/Header";
import {routes} from "./config/routes";
import "./index.css";

const actions = {
  Songs,
  Home,
  Artists,
  Albums
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container fluid className={"p-0 text-dark"} style={{width: "1000px", height: "100vh"}}>
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
                    render={props => <Component {...props} {...this.props} actions={actions}/>}
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

const mapStateToProps = (state) => {
  return {
    store: state
  }
};

export default connect(mapStateToProps)(App);
