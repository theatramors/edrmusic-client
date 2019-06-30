import { combineReducers } from "redux";

import application from './applicationReducer';
import artists from './artistsReducer';
import authentication from './authenticationReducer';
import bots from './botsReducer';
import songs from './songsReducer';
import ticket from './ticketReducer';

export default combineReducers({
  application,
  artists,
  authentication,
  bots,
  songs,
  ticket
});
