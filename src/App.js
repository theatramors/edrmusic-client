import "bootstrap/dist/css/bootstrap.css";
import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Container} from "reactstrap";
import * as actions from "./actions";
import Header from "./components/Header";
import Main from "./components/Main";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container fluid className={"text-dark"} style={{width: "1000px", height: "100vh"}}>
          <Header/>
          <Main actions={actions.default}/>
          <ToastContainer/>
        </Container>
      </BrowserRouter>
    );
  }
}
