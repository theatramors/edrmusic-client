import * as ActionTypes from "../constants/ActionTypes";

const songs = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SONGS_LOADED:
      return action.data;
    default:
      return state;
  }
};

export default songs;
