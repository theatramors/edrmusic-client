import React, {Component} from "react";
import {Container} from "reactstrap";
import * as actions from "./actions";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  render() {
    console.log("App props", this.props);
    return (
      <Container fluid className={"text-dark"} style={{width: "1000px", height: "100vh"}}>
        <Header/>
        <Main actions={actions.default}/>
      </Container>
    );
  }
}

export default App;
