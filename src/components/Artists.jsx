import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { bindActionCreators } from "redux";
import { serverUrl } from "../constants/constants.js";
import * as actions from "../store/actions";
import Loader from "./Loader/Loader";

class Artists extends Component {
  componentDidMount() {
    this.props.actions.artists.componentDidMount();
  }

  render() {
    const { list } = this.props.store.artists;

    return (
      <Container className={"p-4 border rounded bg-light shadow"}>
        {
          list ? (
            <Row>
              <Col xs={"12"}>
                <h4 className={"mb-4"}>Popular artists</h4>
              </Col>
              {
                list.map((value, index, array) => (
                  <Col xs={"3"} className={array.length - index < 5 ? "mb-0" : "mb-4"} key={index}>
                    <Card className={"shadow"}>
                      <Link to={"/artists/" + value.id}>
                        <CardImg src={serverUrl + "/artists/" + value.id + "/logo"}/>
                      </Link>
                      <CardBody className={"text-center border-top bg-light"}>
                        <CardTitle tag={"h6"} className={"mb-0 text-dark"}>
                          <Link to={"/artists/" + value.id} className={"text-dark"} style={{ overflow: "hidden", whiteSpace: "nowrap" }}>{value.name}</Link>
                        </CardTitle>
                        <CardText tag={"small"}>
                          <Link to={"/"} className={"text-dark"}>{value.genre}</Link>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          ) : (
            <Row className={"justify-content-center"}>
              <Col xs={"auto"}><Loader/></Col>
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
      ...state
    }
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      artists: bindActionCreators(actions.artistsActions, dispatch)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
