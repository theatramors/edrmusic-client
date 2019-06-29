import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

export default class PageNotFoundComponent extends Component {
  componentDidMount() {
    document.title = "EDR.Music";
  }

  render() {
    return (
      <Jumbotron className={"text-center border bg-light shadow"}>
        <h1 className="display-4">404. Page Not Found.</h1>
      </Jumbotron>
    );
  }
}
