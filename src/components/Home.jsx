import React, {Component} from "react";
import {Col, Jumbotron, Row} from "reactstrap";

export default class Home extends Component {
  componentDidMount() {
    this.props.actions.Home.componentDidMount();
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
