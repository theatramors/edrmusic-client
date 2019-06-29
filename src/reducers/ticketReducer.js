import { ACTIONS } from "../constants/actions";

const initialState = {
  list: [],
  modal: {
    opened: false
  }
};

const ticket = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TICKETS.LIST_LOADED:
      return {
        ...state,
        list: action.payload
      };
    case ACTIONS.TICKETS.MODAL.OPENED:
      return {
        ...state,
        modal: {
          ...state.modal,
          opened: true
        }
      };
    case ACTIONS.TICKETS.MODAL.CLOSED:
      return {
        ...state,
        modal: {
          ...state.modal,
          opened: false
        }
      };
    default:
      return state
  }
};

export default ticket;