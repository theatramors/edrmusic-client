import { ACTIONS } from "../constants/actions";
import SongsService from "../services/SongsService";

const componentDidMount = () => {
  document.title = "Tracks";

  return dispatch => {
    SongsService.getSongs()
      .then(value => dispatch(listLoaded(value.data)))
      .catch(() => dispatch(listLoaded([])));
  }
};

const listLoaded = (payload) => {
  return {
    type: ACTIONS.SONGS.LIST_LOADED,
    payload: payload
  }
};

export default {
  componentDidMount
}
