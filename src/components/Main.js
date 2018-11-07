import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {Col, Jumbotron, Row} from "reactstrap";
import Albums from "./Albums/Albums";
import Artists from "./Artists/Artists";
import PageNotFound from "./PageNotFound";
import Profile from "./Profile/Profile";
import Songs from "./Tracks/Songs";

export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route path={"/tracks"} component={Songs}/>
        <Route path={"/artists"} component={Artists}/>
        <Route path={"/albums"} component={Albums}/>
        <Route path={"/users"} component={Profile}/>
        <Route component={PageNotFound}/>
      </Switch>
    );
  }
}

class Home extends Component {
  componentDidMount() {
    document.title = "EDR.Music";
  }

  render() {
    return (
      <Jumbotron className={"bg-light shadow"}>
        <Row>
          <Col xs={"4"}>
            <img src={"https://cdn.worldvectorlogo.com/logos/react.svg"} width={"100%"} alt={"React Logo"}/>
          </Col>
          <Col>
            <h1 className="display-4">EDR.Music</h1>
            <hr className="my-2"/>
            <p className="lead">This is a client for EmptyDarkRoom web app created with React.</p>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}
