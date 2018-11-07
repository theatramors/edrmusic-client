import React from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar, NavItem, NavLink} from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar color={"light"} className={"mb-4 rounded-bottom shadow"} expand={"xs"}>
        <Nav navbar>
          <NavItem className={"mr-4"}>
            <NavLink tag={"span"}><Link to={"/"} className={"text-dark"}>EDR.Music</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={"span"}><Link to={"/tracks"} className={"text-dark"}>Tracks</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={"span"}><Link to={"/artists"} className={"text-dark"}>Artists</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={"span"}><Link to={"/albums"} className={"text-dark"}>Albums</Link></NavLink>
          </NavItem>
        </Nav>
        <Nav navbar className={"ml-auto"}>
          <NavItem>
            <NavLink tag={"span"}><Link to={"/users/theatramors"} className={"text-dark"}>My music</Link></NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
