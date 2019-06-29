import axios from "axios";
import { ACTIONS } from "../constants/actions";
import { history } from "../store/store";

const login = data => {
  return dispatch => {
    axios.post("/auth/login", data).then(value => {
      const { token, user } = value.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      axios.defaults.headers.common['Authentication'] = token;

      history.push("/");

      dispatch({
        type: ACTIONS.AUTHENTICATION.LOGIN,
        payload: { token, user }
      });
    })
  }
};

const logout = () => {
  return dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    delete axios.defaults.headers.common['Authentication'];

    history.push("/");

    dispatch({
      type: ACTIONS.AUTHENTICATION.LOGOUT
    });
  }
};

export default {
  login,
  logout
}