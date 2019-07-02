import axios from "axios";
import { history } from "../redux";

function initAxios() {
  axios.defaults.headers.common['Authentication'] = localStorage.getItem('token');

  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => { // error = { response: { data, status, headers } request, message, config }
      switch (error.response.status) {
        case 403:
          console.log('403 code');
          localStorage.clear();
          history.push("/login");
          break;
        case 502:
          console.log('502 code');
          break;
        default:
          return Promise.reject(error);
      }
    }
  );
}

export default initAxios;
