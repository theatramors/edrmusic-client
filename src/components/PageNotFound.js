import React from "react";
import { Jumbotron } from "reactstrap";

export default class PageNotFound extends React.Component {
  render() {
    return (
      <Jumbotron className={ "text-center border bg-light shadow" }>
        <h1 className="display-4">404. Page Not Found.</h1>
      </Jumbotron>
    );
  }
}