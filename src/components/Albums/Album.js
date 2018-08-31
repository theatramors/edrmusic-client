import axios from "axios/index";
import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

export default class Album extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      album: {
        id: null,
        name: null,
        year: null,
        artist: {
          id: null,
          name: null,
          genre: null
        },
        songs: [{
          id: null,
          name: null
        }]
      }
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8080/albums/" + this.props.match.params.id).then(answer => {
      this.setState({
        album: answer.data
      });
    }).catch(error =>
      console.log(error)
    );
  }

  render() {
    document.title = "" + this.state.album.name;

    return (
      <Row>
        <Col>
          <div className={ "p-4 text-dark border rounded bg-light shadow" }>
            <Row className={ "mb-5" }>
              <Col xs={ "3" }>
                <img src={ "http://localhost:8080/albums/" + this.state.album.id + "/cover" } width={ "100%" } alt={ "Logo" } className={ "rounded shadow" } />
              </Col>
              <Col>
                <Row>
                  <Col>
                    <span className={ "lead text-muted" }>{ "ALBUM" }</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h1 className={ "display-4" }>{ this.state.album.name }</h1>
                  </Col>
                </Row>
                <hr className={ "my-2" } />
                <Row>
                  <Col>
                    <span className={ "lead text-muted" }>Artist: <Link to={ "/artists/" + this.state.album.artist.id } className={ "text-muted" }>{ this.state.album.artist.name }</Link></span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span className={ "lead text-muted" }>{ this.state.album.year } • </span><Link to={ "/genres/" + this.state.album.artist.genre } className={ "lead text-muted" }>{ this.state.album.artist.genre }</Link>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4 className={ "mb-4" }>Tracks</h4>
              </Col>
            </Row>
            { this.state.album.songs.map((value, index) => {
              return (
                <Row key={ index } className={ "lead p-1 song" }>
                  <Col xs={ "auto" } style={ { width: "35px" } }>
                    { index + 1 }
                  </Col>
                  <Col>
                    <Link to={ "/" } className={ "text-dark" }>{ value.name }</Link>
                  </Col>
                  <Col xs={ "1" } className={ "ml-auto text-right" }>
                    <span>{ "3:59" }</span>
                  </Col>
                </Row>
              )
            }) }
          </div>
        </Col>
      </Row>
    );
  }
}
