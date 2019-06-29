import axios from "axios";
import { ACTIONS } from "../constants/actions";

const componentDidMount = () => {
  return dispatch => {
    axios.get("/tickets")
      .then(value => {
        dispatch({
          type: ACTIONS.TICKETS.LIST_LOADED,
          payload: value.data
        });
      })
      .catch(reason => {
        console.error(reason);
      })
  }
};

const componentWillUnmount = () => {
  return {
    type: ACTIONS.TICKETS.LIST_CLEARED
  };
};

const post = data => {
  return dispatch => {
    axios.post("/tickets", data).then(() => {
      dispatch({
        type: ACTIONS.TICKETS.ADDED
      });
    })
  }
};

const openModal = () => {
  return {
    type: ACTIONS.TICKETS.MODAL.OPENED
  };
};

const closeModal = () => {
  return {
    type: ACTIONS.TICKETS.MODAL.CLOSED
  };
};

export default {
  componentDidMount,
  componentWillUnmount,
  post,
  openModal,
  closeModal
}