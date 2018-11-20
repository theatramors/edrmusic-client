import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Card, CardBody, CardImg, CardText, CardTitle, Col, Row} from "reactstrap";
import {AlbumsService} from "../services/index";

export default class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: null
    }
  }

  componentDidMount() {
    this.props.actions.AlbumsList.componentDidMount();

    AlbumsService.getAlbums().then(answer => {
      this.setState({
        albums: answer.data
      });
    }).catch(error => {
      // TODO: Add error handling
    });
  }

  render() {
    return (
      <Row>
        {
          this.state.albums &&
          this.state.albums.map((value) => (
            <Col xs={"3"} className={"mb-4"} key={value.id}>
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
    );
  }
}
