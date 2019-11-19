import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { getToken } from "../utils/utils";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Filter from "../pages/Filter/Filter";

export const AuthorizedRoute = ({ component: Component, isUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isUser ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }
  />
);

class Routes extends Component {
  render() {
    const isUser = getToken("token");

    return (
      <Switch>
        <Route>
          <AuthorizedRoute exact path="/" component={Home} isUser={isUser} />
          <AuthorizedRoute
            exact
            path="/browse"
            component={Filter}
            isUser={isUser}
          />
          <Route exact path="/login" component={Login} />
        </Route>
      </Switch>
    );
  }
}

export default Routes;
