import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./index.css";
import App from "./App";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Redirect path="*" to="/" />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
