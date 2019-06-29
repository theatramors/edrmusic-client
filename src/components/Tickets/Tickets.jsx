import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Col, Container, Row } from 'reactstrap';
import { bindActionCreators } from "redux";
import TableWrapper from "../../containers/TableWrapper.jsx";
import * as actions from "../../store/actions";
import Loader from "../Loader/Loader";
import AddTicketModal from "./CreateTicketModal";

class Tickets extends Component {
  componentDidMount() {
    this.props.actions.ticket.componentDidMount()
  }

  componentWillUnmount() {
    this.props.actions.ticket.componentWillUnmount()
  }

  render() {
    const { actions, store } = this.props;
    const { list } = store.ticket;

    return (
      <Container className={"p-4 border rounded bg-light shadow"}>
        <Row className={"mb-4"}>
          <Col xs>
            <h4 className={"mb-0"}>Tickets</h4>
          </Col>
          <Col xs={"auto"}>
            <Button size={"sm"} color={"primary"} onClick={actions.ticket.openModal}>Create ticket</Button>
          </Col>
        </Row>

        <AddTicketModal/>

        {
          list.length > 0 ? (
            <TableWrapper columns={["ID", "Status"]} list={list}/>
          ) : (
            <Row className={"justify-content-center"}>
              <Col xs={"auto"}><Loader/></Col>
            </Row>
          )
        }
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: {
      ...state
    }
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      ticket: bindActionCreators(actions.ticket, dispatch)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);