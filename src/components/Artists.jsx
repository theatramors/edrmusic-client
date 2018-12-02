import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import {serverUrl} from "../constants/constants.js";
import {ArtistsService} from "../services/index";
import Loader from "./Loader/Loader";

export default class Artists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: null
    }
  }

  componentDidMount() {
    this.props.actions.Artists.componentDidMount();

    ArtistsService.getArtists().then((answer) => {
      this.setState({
        artists: answer.data
      });
    }).catch(() => {
      // TODO: Add error handling
    });
  }

  render() {
    return (
      <Container className={"p-4 border rounded bg-light shadow"}>
        {
          this.state.artists ? (
            <Row>
              <Col xs={"12"}>
                <h4 className={"mb-4"}>Popular artists</h4>
              </Col>
              {
                this.state.artists.map((value, index, array) => (
                  <Col xs={"3"} className={array.length - index < 5 ? "mb-0" : "mb-4"} key={index}>
                    <Card className={"shadow"}>
                      <Link to={"/artists/" + value.id}>
                        <CardImg src={serverUrl + "/artists/" + value.id + "/logo"}/>
                      </Link>
                      <CardBody className={"text-center border-top bg-light"}>
                        <CardTitle tag={"h6"} className={"mb-0 text-dark"}>
                          <Link to={"/artists/" + value.id} className={"text-dark"} style={{overflow: "hidden", whiteSpace: "nowrap"}}>{value.name}</Link>
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
