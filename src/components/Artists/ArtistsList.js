import React from "react";
import {Link} from "react-router-dom";
import {Card, CardBody, CardImg, CardText, CardTitle, Col, Row} from "reactstrap";
import {serverUrl} from "../../constants/constants.js";
import {ArtistsService} from "../../services";

class ArtistsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: null
    }
  }

  componentDidMount() {
    this.props.actions.ArtistsList.componentDidMount();
    ArtistsService.getArtists().then((answer) => {
      this.setState({
        artists: answer.data
      });
    }).catch(() => {
      // TODO: Add error handling
    });
  }

  render() {
    console.log("ArtistsList props", this.props);
    return (
      <Row>
        {
          this.state.artists &&
          this.state.artists.map((value) => (
            <Col xs={"3"} className={"mb-4"} key={value.id}>
              <Card className={"shadow"}>
                <Link to={"/artists/" + value.id}>
                  <CardImg src={serverUrl + "/artists/" + value.id + "/logo"}/>
                </Link>
                <CardBody className={"text-center border-top bg-light"}>
                  <CardTitle tag={"h6"} className={"mb-0 text-dark"}>
                    <Link to={"/artists/" + value.id} className={"text-dark"} style={{overflow: "hidden", whiteSpace: "nowrap"}}>{value.name}</Link>
                  </CardTitle>
                  <CardText tag={"small"}><Link to={"/"} className={"text-dark"}>{value.genre}</Link></CardText>
                </CardBody>
              </Card>
            </Col>
          ))
        }
      </Row>
    );
  }
}

export default ArtistsList;
