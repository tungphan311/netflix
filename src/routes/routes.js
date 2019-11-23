import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { getToken } from "../utils/utils";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Filter from "../pages/Filter/Filter";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import EmptyLayout from "../layouts/EmptyLayout/EmptyLayout";

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
    const { history } = this.props;

    return (
      <Switch>
        <Route exact path={["/", "/browse"]}>
          <DefaultLayout history={history}>
            <AuthorizedRoute exact path="/" component={Home} isUser={isUser} />
            <AuthorizedRoute
              exact
              path="/browse"
              component={Filter}
              isUser={isUser}
            />
          </DefaultLayout>
        </Route>
        <Route exact path={["/login"]}>
          <EmptyLayout>
            <Route exact path="/login" component={Login} />
          </EmptyLayout>
        </Route>
      </Switch>
    );
  }
}

export default Routes;
