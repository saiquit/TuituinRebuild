import React, { Suspense, useEffect, useState } from "react";

import { Layout } from "antd";

import { Route, Switch, Redirect } from "react-router-dom";

import { tutorRoutes, guardianRoutes } from "../../routes";
import Spinner from "../../components/Spinner/Spinner";

const { Content } = Layout;

const renderRoute = (routeName) => {
  return routeName.map((route, idx) => {
    return (
      route.component && (
        <Route
          key={idx}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={(props) => <route.component {...props} />}
        />
      )
    );
  });
};

function MainContent({ user }) {
  return (
    <Content style={{ margin: "0 16px", background: "none" }}>
      <main className="c-main">
        <Suspense fallback={<Spinner />}>
          <Switch>
            {user.role === "tutor"
              ? renderRoute(tutorRoutes)
              : renderRoute(guardianRoutes)}
            <Redirect from="/" to="/dashboard" exact />
          </Switch>
        </Suspense>
      </main>
    </Content>
  );
}

export default MainContent;
