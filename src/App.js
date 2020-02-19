import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import routes from "./routes";
import "./css/bootstrap.min.css";
import "./assets/main.scss";
import "./css/shards-dashboards.1.1.0.css";
import ErrorPage from "./views/ErrorPage";
export default () => (
  <BrowserRouter basename={process.env.REACT_APP_BASENAME || ""}>
    <Switch>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={props => (
              <route.layout {...props}>
                <route.component {...props} />
              </route.layout>
            )}
          />
        );
      })}
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);
