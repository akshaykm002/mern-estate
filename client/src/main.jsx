import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Correct import path
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

