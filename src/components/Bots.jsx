import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";

class Bots extends Component {
  componentDidMount() {
    document.title = "Bots";
  }

  render() {
    return (
      <Container className={"p-4 border rounded bg-light shadow"}>
        <Row>
          <Col xs>
            <h4 className={"mb-0"}>Bots</h4>
          </Col>
        </Row>
        <hr/>
      </Container>
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
    actions: {}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bots);
