import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavItem, NavLink, UncontrolledDropdown } from "reactstrap";
import { bindActionCreators } from "redux";
import * as actions from "../actions";

class Header extends Component {
  render() {
    const { actions, store, history } = this.props;

    return (
      <Navbar color={"light"} className={"mb-4 rounded-bottom shadow"} expand={"xs"}>
        <Nav navbar>
          <NavItem className={"mr-4"}>
            <NavLink tag={"span"}>
              <Link to={"/"} className={"text-dark"}>EDR</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={"span"}>
              <Link to={"/bots"} className={"text-dark"}>Bots</Link>
            </NavLink>
          </NavItem>
          {/*<NavItem>*/}
          {/*  <NavLink tag={"span"}>*/}
          {/*    <Link to={"/tickets"} className={"text-dark"}>Tickets</Link>*/}
          {/*  </NavLink>*/}
          {/*</NavItem>*/}
        </Nav>
        <Nav navbar className={"ml-auto align-items-center"}>
          {
            store.authentication.user ? (
              <UncontrolledDropdown>
                <DropdownToggle nav caret className={"text-dark"}>
                  {store.authentication.user.username}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => history.push("/users/" + store.authentication.user.username)}>
                    Profile
                  </DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem onClick={actions.authentication.logout}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <NavItem>
                <NavLink tag={"span"}>
                  <Link to={"/login"} className={"text-dark"}>
                    <Button size={"sm"} color={"primary"}>Login</Button>
                  </Link>
                </NavLink>
              </NavItem>
            )
          }
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: {
      authentication: state.authentication
    }
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      authentication: bindActionCreators(actions.authentication, dispatch)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
