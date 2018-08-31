import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "reactstrap";
import axios from "axios/index";
import { Link } from "react-router-dom";

export default class AlbumsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [{
        id: "",
        name: "",
        artist: {
          id: "",
          name: ""
        }
      }]
    }
  }

  componentDidMount() {
    document.title = "Albums";

    axios.get("http://localhost:8080/albums").then(answer => {
      this.setState({
        albums: answer.data
      });
    }).catch(error =>
      console.log(error)
    );
  }

  render() {
    return (
      <Row>
        {this.state.albums.map((value) => (
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
        ))}
      </Row>
    );
  }
}