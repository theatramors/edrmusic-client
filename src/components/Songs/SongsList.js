import axios from "axios/index";
import React from "react";
import {Link} from "react-router-dom";
import {Col, Row} from "reactstrap";

class SongsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: null
    }
  }

  componentDidMount() {
    document.title = "Songs";

    axios.get("http://localhost:8080/songs").then(answer => {
      this.setState({
        songs: answer.data
      });
    }).catch(error => {
        // TODO: Add error handling
      }
    );
  }

  render() {
    return (
      <div className={"p-4 border rounded bg-light shadow"}>
        <Row>
          <Col xs={"auto"}>
            <h4 className={"mb-4"}>Popular tracks</h4>
          </Col>
        </Row>
        {this.state.songs &&
        this.state.songs.map((value, index) => (
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
        ))}
      </div>
    );
  }
}

export default SongsList;
