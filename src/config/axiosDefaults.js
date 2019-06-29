import axios from "axios";
import { history } from "../redux";

axios.defaults.baseURL = 'http://edr.local:8080';
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
      default:
        return Promise.reject(error);
    }
  }
);
