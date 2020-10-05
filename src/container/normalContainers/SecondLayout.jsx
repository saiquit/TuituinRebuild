import React from "react";
import { Layout } from "antd";
import { normalRoute } from "../../routes";
import { Route, Switch } from "react-router-dom";
import NormalHeader from "./NormalHeader";
import NormalFooter from "./NormalFooter";
const { Content } = Layout;

function SecondLayout() {
  return (
    <Layout className="layout">
      <NormalHeader />
      <Content>
        <div className="site-layout-content">
          <Switch>
            {normalRoute.map((route, idx) => {
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
            })}
            {/* <Redirect from="/dashboard" to="/" exact /> */}
          </Switch>
        </div>
      </Content>
      <NormalFooter />
    </Layout>
  );
}

export default SecondLayout;
