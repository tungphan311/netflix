import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import history from "./state/history";
import App from "./App";
import "./styles/index.scss";
import * as serviceWorker from "./serviceWorker";
import Routes from "./routes/routes";
import store from "./state/store";
// import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/" component={Routes} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
