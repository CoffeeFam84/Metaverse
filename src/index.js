import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Routing from "./components/Routing";
import Icons from "./components/Icons";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Routing />
      <Icons />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
