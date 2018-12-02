import * as ActionTypes from "../constants/ActionTypes";
import SongsService from "../services/SongsService";
import {store} from "../store/store";

const SongsDidMount = () => {
  document.title = "Tracks";

  SongsService.getSongs().then(answer => {
    store.dispatch({
      type: ActionTypes.SONGS_LOADED,
      data: answer.data
    });
  }).catch((error) => {
    console.log("GetSongs Error", error);
  });
};

export {
  SongsDidMount
}
