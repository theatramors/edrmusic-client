import axios from 'axios';
import { ACTIONS } from "../constants/actions";

const componentDidMount = () => {
  document.title = "Artists";

  return dispatch => {
    axios.get('/artists').then(answer => {
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
