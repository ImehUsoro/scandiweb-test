import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AppWrapper from "./wrappers/AppWrapper";

ReactDOM.render(
  <Router>
    <RecoilRoot>
      <React.StrictMode>
        <AppWrapper />
      </React.StrictMode>
    </RecoilRoot>
  </Router>,
  document.getElementById("root")
);
