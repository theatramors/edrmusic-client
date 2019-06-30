import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";

class Bots extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    axios.get("/edr-app/bots").then(value => this.setState({ list: value.data }));

    document.title = "Bots";
  }

  render() {
    const { list } = this.props.store.bots;

    return (
      <Container className={"p-4 border rounded bg-light shadow"}>
        <Row>
          <Col xs>
            <h4 className={"mb-0"}>Bots</h4>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col xs={"2"}>ID</Col>
          <Col xs={"4"}>Name</Col>
          <Col xs>URL</Col>
        </Row>
        <hr/>
        {
          this.state.list.map(value =>
            <Row key={value.id}>
              <Col xs={"2"}>{value.id}</Col>
              <Col xs={"4"}>{value.name}</Col>
              <Col xs>{value.url}</Col>
            </Row>
          )
        }
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: {
      bots: state.bots
    }
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bots);
