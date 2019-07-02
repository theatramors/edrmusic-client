import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "reactstrap";
import { bindActionCreators } from "redux";
import * as actions from "./actions";
import Header from "./components/Header";
import { config } from "./config";
import { history } from "./redux";

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
                      {
                        value.inLayout && <Header {...props}/>
                      }
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
      application: state.application
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      albums: bindActionCreators(actions.albums, dispatch),
      artists: bindActionCreators(actions.artists, dispatch),
      home: bindActionCreators(actions.home, dispatch),
      songs: bindActionCreators(actions.songs, dispatch),
    }
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
