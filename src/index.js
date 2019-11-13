import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import history from "./state/history";
import App from "./App";
import "./styles/index.scss";
import * as serviceWorker from "./serviceWorker";
import Routes from "./routes/routes";

ReactDOM.render(
  <Router history={history}>
    <App>
      <Switch>
        <Route path="/" component={Routes} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
