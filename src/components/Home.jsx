import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Jumbotron, Row } from "reactstrap";
import { bindActionCreators } from "redux";
import * as actions from "../actions";

class Home extends Component {
  componentDidMount() {
    this.props.actions.home.componentDidMount();
  }

  render() {
    return (
      <Jumbotron className={"bg-light shadow"}>
        <Row>
          <Col xs={"4"}>
            <img src={"https://cdn.worldvectorlogo.com/logos/react.svg"} width={"100%"} alt={"React Logo"}/>
          </Col>
          <Col>
            <h1 className="display-4">EmptyDarkRoom</h1>
            <hr className="my-2"/>
            <p className="lead">This is a client for EmptyDarkRoom web app created with React.</p>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: {
      ...state
    }
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      home: bindActionCreators(actions.home, dispatch)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
