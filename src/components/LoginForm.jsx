import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Form, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { bindActionCreators } from "redux";
import * as actions from "../store/actions";

class LoginForm extends Component {
  state = {
    login: null,
    password: null
  };

  render() {
    const { actions } = this.props;

    return (
      <Modal isOpen={true} backdrop={false} className={"shadow"}>
        <Form>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            <Input type={"text"} className={"mb-2"} placeholder={"Username"} onBlur={event => this.setState({ login: event.target.value })}/>
            <Input type={"password"} placeholder={"Password"} onBlur={event => this.setState({ password: event.target.value })}/>
          </ModalBody>
          <ModalFooter>
            <Button size={"sm"} color={"primary"} onClick={() => actions.authentication.login(this.state)}>
              Login
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: {}
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      authentication: bindActionCreators(actions.authenticationActions, dispatch)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
