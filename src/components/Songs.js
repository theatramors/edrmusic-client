import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "reactstrap";
import {SongsService} from "../services";
import Loader from "./Loader/Loader";

export default class Songs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      songs: null
    }
  }

  componentDidMount() {
    document.title = "Tracks";

    SongsService.getSongs().then(answer => {
      this.setState({
        songs: answer.data
      });
    }).catch(() => {
      this.setState({
        error: true
      });
    });
  }

  render() {
    return (
      <Container className={"p-4 border rounded bg-light shadow"}>
        {
          this.state.songs ? (
            <Row>
              <Col>
                <Row>
                  <Col xs={"auto"}>
                    <h4 className={"mb-4"}>Popular tracks</h4>
                  </Col>
                </Row>
                {
                  this.state.songs.map((value, index) =>
                    <Row className={"p-1 lead song"} key={value.id}>
                      <Col xs={"auto"} style={{width: "35px"}}>
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
          ) : this.state.error ? (
            <Row className={"justify-content-center"}>
              <Col xs={"auto"}>No data...</Col>
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
