import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { bindActionCreators } from "redux";
import * as actions from "../actions";

class Songs extends Component {
  componentDidMount() {
    this.props.actions.songs.componentDidMount();
  }

  render() {
    const { list } = this.props.store.songs;

    return (
      <Container className={"p-4 border rounded bg-light shadow"}>
        {
          <Row>
            <Col>
              <Row>
                <Col xs={"auto"}>
                  <h4 className={"mb-4"}>Popular tracks</h4>
                </Col>
              </Row>
              {
                list.map((value, index) =>
                  <Row className={"p-1 lead song"} key={value.id}>
                    <Col xs={"auto"} style={{ width: "35px" }}>
                      {index + 1}
                    </Col>
                    <Col xs={"5"}>
                      <Link to={"/tracks/" + value.id} className={"text-dark"}>{value.name}</Link>
                    </Col>
                    <Col>
                      <Link to={"/artists/" + value.artist.id} className={"text-dark"}>{value.artist.name}</Link>
                    </Col>
                    <Col xs={"1"} className={"text-right"}>
                      {"3:59"}
                    </Col>
                  </Row>
                )
              }
            </Col>
          </Row>
        }
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
    actions: {
      songs: bindActionCreators(actions.songs, dispatch)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
