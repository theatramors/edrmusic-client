import {combineReducers, createStore} from "redux";
import songs from '../reducers/SongsReducer';

const reducers = combineReducers({
  songs
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {
  store
};
