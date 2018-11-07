import axios from "axios";
import {serverUrl} from "../constants/constants.js";

const instance = axios.create({
  baseURL: serverUrl,
  timeout: 30000,
  headers: {
    "content-type": "application/json;charset=UTF-8"
  }
});

export {
  instance
};
