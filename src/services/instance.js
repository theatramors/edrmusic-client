import axios from "axios";
import { serverUrl } from "../constants/constants.js";

export const instance = axios.create({
  baseURL: serverUrl,
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
