import { combineReducers } from "redux";
import artists from '../reducers/artistsReducer';
import authentication from '../reducers/authenticationReducer';
import songs from '../reducers/songsReducer';
import ticket from '../reducers/ticketReducer';

export default combineReducers({
  artists,
  authentication,
  songs,
  ticket
});
