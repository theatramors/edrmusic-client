import { combineReducers } from "redux";

import application from './applicationReducer';
import artists from './artistsReducer';
import authentication from './authenticationReducer';
import songs from './songsReducer';
import ticket from './ticketReducer';

export default combineReducers({
  application,
  artists,
  authentication,
  songs,
  ticket
});
