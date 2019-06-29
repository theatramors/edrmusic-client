import { ACTIONS } from "../constants/actions";

const initialState = {
  token: localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user'))
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.AUTHENTICATION.LOGIN:
      return {
        token: action.payload.token,
        user: action.payload.user
      };
    case ACTIONS.AUTHENTICATION.LOGOUT:
      return {
        token: null,
        user: null
      };
    default:
      return state;
  }
};

export default authentication;