import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./config/axiosDefaults";
import { store } from "./redux";
import registerServiceWorker from "./registerServiceWorker";
import "./style/index.css";

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));
registerServiceWorker();
