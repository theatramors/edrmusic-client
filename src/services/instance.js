import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://edr.local:8080',
  timeout: 30000,
  headers: {
    "content-type": "application/json;charset=UTF-8"
  }
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
