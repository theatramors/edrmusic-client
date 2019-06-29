import { ACTIONS } from "../constants/actions";

const initialState = {
  list: []
};

const artists = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ARTISTS.LIST_LOADED:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};

export default artists;
