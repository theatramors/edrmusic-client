import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Form, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { bindActionCreators } from "redux";
import * as actions from "../../actions";

class CreateTicketModal extends Component {
  render() {
    const { actions, store } = this.props;

    return (
      <Modal fade isOpen={store.ticket.modal.opened} toggle={actions.ticket.closeModal}>
        <Form>
          <ModalHeader>Create ticket</ModalHeader>
          <ModalBody>
            <Input type={"text"} className={"mb-2"} placeholder={"Username"} onBlur={event => this.setState({ login: event.target.value })}/>
            <Input type={"password"} placeholder={"Password"} onBlur={event => this.setState({ password: event.target.value })}/>
          </ModalBody>
          <ModalFooter>
            <Button size={"sm"} color={"primary"}>Create</Button>
            <Button size={"sm"} color={"link"} onClick={actions.ticket.closeModal}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: {
      ticket: state.ticket
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateTicketModal);
