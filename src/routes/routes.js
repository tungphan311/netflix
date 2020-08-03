import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { getToken } from "../utils/utils";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Filter from "../pages/Filter/Filter";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import EmptyLayout from "../layouts/EmptyLayout/EmptyLayout";
import Details from "../pages/Details/Details";
import Watch from "../pages/Watch/Watch";
import Favorites from "../pages/Favorites/Favorites";
import ReviewPage from "../pages/Reviews/Review";
import BrowseTitle from "../pages/Browse/BrowseTitle";

export const AuthorizedRoute = ({ component: Component, isUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isUser ? (
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
    const isUser = getToken("authen");
    const { history } = this.props;

    return (
      <Switch>
        <Route
          exact
          path={[
            "/",
            "/browse",
            "/title/:id",
            "/my-favorites",
            "/title/:id/reviews",
            "/browse/title"
          ]}
        >
          <DefaultLayout history={history}>
            <AuthorizedRoute exact path="/" component={Home} isUser={isUser} />
            <AuthorizedRoute
              exact
              path="/browse"
              component={Filter}
              isUser={isUser}
              history={history}
            />
            <AuthorizedRoute
              exact
              path="/my-favorites"
              component={Favorites}
              isUser={isUser}
              history={history}
            />
            <AuthorizedRoute
              exact
              path="/title/:id"
              component={Details}
              isUser={isUser}
            />
            <AuthorizedRoute
              exact
              path="/title/:id/reviews"
              component={ReviewPage}
              isUser={isUser}
            />
            <AuthorizedRoute
              exact
              path="/browse/title"
              component={BrowseTitle}
              isUser={isUser}
            />
          </DefaultLayout>
        </Route>
        <Route exact path={["/login", "/watch/:id", "/register"]}>
          <EmptyLayout>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/watch/:id" component={Watch} />
          </EmptyLayout>
        </Route>
      </Switch>
    );
  }
}

export default Routes;
