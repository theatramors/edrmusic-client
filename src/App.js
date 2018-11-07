import React, {Component} from "react";
import {Container} from "reactstrap";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

export default class App extends Component {
  render() {
    return (
      <Container fluid className={"text-dark"} style={{width: "1000px", height: "100vh"}}>
        <Header/>
        <Main/>
      </Container>
    );
  }
}
