import axios from "axios";
import { ACTIONS } from "../constants/actions";

const componentDidMount = () => {
  document.title = "Bots";

  return (dispatch) => {
    axios.get("/edr-app/bots").then(value => {
      dispatch(listLoadSuccess(value.data));
    }).catch(() => {
      dispatch(listLoadFailed());
    });
  }
};

function listLoadSuccess(data) {
  return {
    type: ACTIONS.BOTS.LIST.LOAD_SUCCESS,
    payload: data
  }
}

function listLoadFailed() {
  return {
    type: ACTIONS.BOTS.LIST.LOAD_FAILED
  }
}

export default {
  componentDidMount
}
