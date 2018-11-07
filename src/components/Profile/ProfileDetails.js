import axios from "axios";
import classnames from "classnames";
import React from "react";
import Col from "reactstrap/src/Col";
import Nav from "reactstrap/src/Nav";
import NavItem from "reactstrap/src/NavItem";
import NavLink from "reactstrap/src/NavLink";
import Row from "reactstrap/src/Row";
import TabContent from "reactstrap/src/TabContent";
import TabPane from "reactstrap/src/TabPane";

class ProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      user: {
        username: this.props.match.params.username,
        admin: false
      }
    }
  }

  componentDidMount() {
    document.title = "Profile - " + this.props.match.params.username;

    axios.get("http://localhost:8080/users/theatramors").then(answer => {
      this.setState({
        user: answer.data
      });
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className={"p-4 border rounded bg-light shadow"}>
        <Row className={"mb-4"}>
          <Col xs={"3"}>
            <img src={"http://localhost:8080/artists/1/logo"} width={"100%"} alt={"Logo"} className={"rounded shadow"}/>
          </Col>
          <Col>
            <Row>
              <Col>
                <span className={"lead text-muted"}>{"MY MUSIC"}</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 className={"display-4"}>{this.state.user.username}</h1>
              </Col>
            </Row>
          </Col>
        </Row>
        <Nav tabs className={"mb-4"}>
          <NavItem>
            <NavLink className={classnames({active: this.state.activeTab === "1"})} onClick={() => this.toggle("1")}>
              <span className={"small text-muted"}>TRACKS</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({active: this.state.activeTab === "2"})} onClick={() => this.toggle("2")}>
              <span className={"small text-muted"}>ALBUMS</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({active: this.state.activeTab === "3"})} onClick={() => this.toggle("3")}>
              <span className={"small text-muted"}>ARTISTS</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({active: this.state.activeTab === "4"})} onClick={() => this.toggle("4")}>
              <span className={"small text-muted"}>PLAYLISTS</span>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId={"1"}>
            <Row>
              <Col xs={"auto"}>
                <h4 className={"mb-4"}>Tracks</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId={"2"}>
            <Row>
              <Col xs={"auto"}>
                <h4 className={"mb-4"}>Albums</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId={"3"}>
            <Row>
              <Col xs={"auto"}>
                <h4 className={"mb-4"}>Artists</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId={"4"}>
            <Row>
              <Col xs={"auto"}>
                <h4 className={"mb-4"}>Playlists</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default ProfileDetails;
