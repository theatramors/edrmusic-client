import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import Loader from "./Loader/Loader";

class Albums extends Component {
  state = {
    albums: null
  };

  componentDidMount() {
    this.props.actions.albums.componentDidMount();
  }

  render() {
    return (
      <Container className={"p-4 border rounded bg-light shadow"}>
        {
          this.state.albums ? (
            <Row>
              <Col xs={"12"}>
                <h4 className={"mb-4"}>Popular albums</h4>
              </Col>
              {
                this.state.albums.map((value, index, array) => (
                  <Col xs={"3"} className={array.length - index < 5 ? "mb-0" : "mb-4"} key={value.id}>
                    <Card className={"shadow"}>
                      <Link to={"/albums/" + value.id}>
                        <CardImg src={"http://localhost:8080/albums/" + value.id + "/cover"}/>
                      </Link>
                      <CardBody className={"text-center border-top bg-light"}>
                        <CardTitle tag={"h6"} className={"mb-0 text-truncate"}>
                          <Link to={"/albums/" + value.id} className={"text-dark"}>{value.name}</Link>
                        </CardTitle>
                        <CardText tag={"small"}><Link to={"/artists/" + value.artist.id} className={"text-dark"}>{value.artist.name}</Link></CardText>
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
      albums: bindActionCreators(actions.albums, dispatch)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
