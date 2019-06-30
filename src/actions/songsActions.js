import axios from 'axios';
import { ACTIONS } from "../constants/actions";

const componentDidMount = () => {
  document.title = "Tracks";

  return dispatch => {
    axios.get('/songs')
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
