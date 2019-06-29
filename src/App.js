import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "reactstrap";
import { bindActionCreators } from "redux";
import Header from "./components/Header";
import { config } from "./config";
import { history } from "./redux";
import * as actions from "./store/actions";

class App extends Component {
  render() {
    const { routes } = this.props.store.application.config;

    return (
      <Router history={history}>
        <Switch>
          {
            routes.map((value, index) => {
              const Component = value.component;
              return (
                <Route
                  key={index}
                  path={value.path}
                  exact={value.exact}
                  render={props =>
                    <Container fluid className={"p-0 text-dark"} style={{ width: "1000px", height: "100vh" }}>
                      <Header {...props}/>
                      <Component {...props}/>
                      <ToastContainer/>
                    </Container>
                  }
                />
              );
            })
          }
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    store: {
      ...state,
      application: {
        config
      }
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      albums: bindActionCreators(actions.albumsActions, dispatch),
      artists: bindActionCreators(actions.artistsActions, dispatch),
      home: bindActionCreators(actions.homeActions, dispatch),
      songs: bindActionCreators(actions.songsActions, dispatch),
    }
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
