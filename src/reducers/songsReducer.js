import { ACTIONS } from "../constants/actions";

const initialState = {
  list: []
};

const Songs = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SONGS.LIST_LOADED:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};

export default Songs;
