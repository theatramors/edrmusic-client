import React from "react";
import Col from "reactstrap/src/Col";
import Jumbotron from "reactstrap/src/Jumbotron";
import Row from "reactstrap/src/Row";

class Home extends React.Component {
  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return (
      <Jumbotron className={"bg-light shadow"}>
        <Row>
          <Col xs={"4"}>
            <img src={"https://cdn.worldvectorlogo.com/logos/react.svg"} width={"100%"} alt={"React Logo"}/>
          </Col>
          <Col>
            <h1 className="display-4">EDR.Music</h1>
            <hr className="my-2"/>
            <p className="lead">This is a client for EmptyDarkRoom web app created with React.</p>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default Home;
