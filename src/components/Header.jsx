import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button, Nav, Navbar, NavItem, NavLink} from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <Navbar color={"light"} className={"mb-4 rounded-bottom shadow"} expand={"xs"}>
        <Nav navbar>
          <NavItem className={"mr-4"}>
            <NavLink tag={"span"}>
              <Link to={"/"} className={"text-dark"}>EDR</Link>
              .
              <Link to={"/music"} className={"text-dark"}>Music</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={"span"}>
              <Link to={"/tracks"} className={"text-dark"}>Tracks</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={"span"}>
              <Link to={"/artists"} className={"text-dark"}>Artists</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={"span"}>
              <Link to={"/albums"} className={"text-dark"}>Albums</Link>
            </NavLink>
          </NavItem>
        </Nav>
        <Nav navbar className={"ml-auto align-items-center"}>
          <NavItem>
            <NavLink tag={"span"}>
              <Link to={"/users/theatramors"} className={"text-dark"}>My music</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={"span"}>
              <Link to={"/users/theatramors"} className={"text-dark"}>
                <Button size={"sm"} color={"danger"}>Login</Button>
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
