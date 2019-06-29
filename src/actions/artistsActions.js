import { ACTIONS } from "../constants/actions";
import ArtistsService from "../services/ArtistsService";

const componentDidMount = () => {
  document.title = "Artists";

  return dispatch => {
    ArtistsService.getArtists().then(answer => {
      dispatch(listLoaded(answer.data));
    }).catch(() => {
      dispatch(listLoaded([]));
    });
  };
};

const listLoaded = (payload) => {
  return {
    type: ACTIONS.ARTISTS.LIST_LOADED,
    payload: payload
  }
};

export default {
  componentDidMount
}